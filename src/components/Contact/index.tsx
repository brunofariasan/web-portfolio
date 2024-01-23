import { useState } from "react";
import Flex from "../micro/Flex";
import Text from "../micro/Text";
import { TEXT } from "./constants";
import * as S from "./styles";
import emailjs from "@emailjs/browser";
import Spinner from "../micro/Spinner/Spinner";
import { useTranslation } from "react-i18next";
import useWindowSize from "@/hooks/useWindowSize";

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowSize();
  const br = width > 830 ? <br /> : "";

  function sendEmail(e: any) {
    e.preventDefault();
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };
    if (name === "" || email === "" || message === "") {
      setIsLoading(false);
      return;
    } else {
      setIsLoading(true);
    }

    emailjs
      .send(
        "serviceGmail",
        "template_3h3cuma",
        templateParams,
        "X2vukpea5orjw7kwk"
      )
      .then(
        (response) => {
          setName("");
          setEmail("");
          setMessage("");
          setIsLoading(false);
        },
        (err) => {}
      );
  }

  return (
    <S.Container>
      {isLoading && <Spinner />}
      <S.Section>
        <Flex flexDirection="column">
          <Text variant="contact-section-title-description">
            {t("contactTitle")}
          </Text>
          <Text variant="title-section-contact">
            {t("lets")} {br} {t("talk")}
          </Text>
        </Flex>
        <Flex flexDirection="column" gap="2.5rem">
          <Text variant="description-contact">{t("message")}</Text>
          <S.Form onSubmit={sendEmail}>
            <S.Inputs>
              <Flex flexDirection="column" width="100%">
                <S.Label htmlFor="name">{t("name")}</S.Label>
                <S.Input
                  type="text"
                  placeholder={t("yourName")}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </Flex>
              <Flex flexDirection="column" width="100%">
                <S.Label htmlFor="email">{t("email")}</S.Label>
                <S.Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("youtEmail")}
                  required
                />
              </Flex>
            </S.Inputs>
            <Flex flexDirection="column" width="100%">
              <S.Label htmlFor="message">{t("textMessage")}</S.Label>
              <S.Input
                as="textarea"
                id="message"
                name="message"
                value={message}
                placeholder={t("youtMessage")}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
              ></S.Input>
            </Flex>
            <S.Button type="submit" onSubmit={sendEmail}>
              {t("sendMessage")}
            </S.Button>
          </S.Form>
        </Flex>
      </S.Section>
    </S.Container>
  );
}
