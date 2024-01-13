import { useState } from "react";
import Flex from "../micro/Flex";
import Text from "../micro/Text";
import { TEXT } from "./constants";
import * as S from "./styles";
import emailjs from "@emailjs/browser";
import Spinner from "../micro/Spinner/Spinner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
            {TEXT.TEXT_PROJECTS}
          </Text>
          <Text variant="title-section-contact">Get in touch —</Text>
        </Flex>
        <Flex flexDirection="column" gap="2.5rem">
          <Text variant="description-contact">{TEXT.DESCRIPTION}</Text>
          <S.Form onSubmit={sendEmail}>
            <S.Inputs>
              <Flex flexDirection="column" width="100%">
                <S.Label htmlFor="name">Nome</S.Label>
                <S.Input
                  type="text"
                  placeholder="Digite seu nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </Flex>
              <Flex flexDirection="column" width="100%">
                <S.Label htmlFor="email">E-mail</S.Label>
                <S.Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
                  required
                />
              </Flex>
            </S.Inputs>
            <Flex flexDirection="column" width="100%">
              <S.Label htmlFor="message">Mensagem</S.Label>
              <S.Input
                as="textarea"
                id="message"
                name="message"
                value={message}
                placeholder="Digite sua mensagem aqui"
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
              ></S.Input>
            </Flex>
            <S.Button type="submit" onSubmit={sendEmail}>
              {TEXT.TEXT_BUTTON}
            </S.Button>
          </S.Form>
        </Flex>
      </S.Section>
    </S.Container>
  );
}
