import * as S from "./styles";
import React, { useState, useEffect } from "react";
import Text from "@/components/micro/Text";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [scrollVisible, setScrollVisible] = useState(true);
  const [textToShow, setTextToShow] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrollVisible(!isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const text = t("ideasIntoReality");
    let index = 0;

    const intervalId = setInterval(() => {
      if (index <= text.length) {
        setTextToShow(text.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 120); // Ajustado para 120 milissegundos

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 600); // ajustado p/ 600 milissegundos

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <S.Container>
      <S.VideoContainer>
        <video autoPlay loop muted playsInline>
          <source
            src="https://res.cloudinary.com/ddanq3pco/video/upload/f_auto:video,q_auto/qc1h83bxwaz0bh1fi93m"
            type="video/mp4"
          />
        </video>
        <S.Content>
          <S.FlexVideo>
            <Text variant="title-banner">{t("softwareEngineer")}</Text>
            <Text variant="title-banner-sub">
              {" "}
              {textToShow}
              {cursorVisible && "|"}
            </Text>
          </S.FlexVideo>
          {/* <S.ScrollDownAnimation visible={scrollVisible}>
            <S.ArrowIcon />
            Scroll Down
          </S.ScrollDownAnimation> */}
        </S.Content>
      </S.VideoContainer>
    </S.Container>
  );
}
