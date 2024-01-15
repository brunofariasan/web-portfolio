import * as S from "./styles";
import Text from "@/components/micro/Text";
import { TEXT } from "./constants";
import { useState, useEffect } from "react";

export default function Banner() {
  const [scrollVisible, setScrollVisible] = useState(true);

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

  return (
    <S.Container>
      <S.VideoContainer>
        <video autoPlay loop muted playsInline>
          <source
            src="https://res.cloudinary.com/ddanq3pco/video/upload/v1705269261/video_b4ilrm.mp4"
            type="video/mp4"
          />
        </video>
        <S.Content>
          <S.FlexVideo>
            <Text variant="title-banner">{TEXT.TITLE_BANNER}</Text>
            <Text variant="title-banner-sub">{TEXT.SUB_TITLE_BANNER}</Text>
          </S.FlexVideo>
        </S.Content>
        {/* <S.ScrollDownAnimation visible={scrollVisible}>
          <S.ArrowIcon />
          Scroll Down
        </S.ScrollDownAnimation> */}
      </S.VideoContainer>
    </S.Container>
  );
}
