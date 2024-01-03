import Flex from "../micro/Flex";
import Text from "../micro/Text";
import { TEXT } from "./constants";
import * as S from "./styles";

export default function AboutMe() {
  return (
    <S.Container>
      <Text variant="section-watermark" component="h1">
        {TEXT.MAIN_TITLE}
      </Text>
      <S.TextSection>
        <Flex gap="2.2rem" flexDirection="column" align="center">
          <Text variant="small-text-about-me">{TEXT.TEXT_START}</Text>
          <Text variant="medium-text-about-me">{TEXT.TEXT_MEDIUM}</Text>
          <Text variant="end-text-about-me">{TEXT.TEXT_END}</Text>
        </Flex>
      </S.TextSection>
    </S.Container>
  );
}
