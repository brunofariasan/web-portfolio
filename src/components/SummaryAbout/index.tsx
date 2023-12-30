import Flex from "../micro/Flex";
import Text from "../micro/Text";
import { TEXT } from "./constants";
import * as S from "./styles";

export default function SummaryAbout() {
  return (
    <S.Container>
      <Text variant="section-watermark" component="h1">
        Developer
      </Text>
      <S.TextSection>
        <Text variant="title-logo">{TEXT.NAME_LOGO}</Text>
        <Flex gap="2.2rem" flexDirection="column">
          <Text variant="main-text-about-me">{TEXT.MAIN_TITLE}</Text>
          <Text variant="final-text-about-me">{TEXT.TEXT_ABOUT}</Text>
        </Flex>
      </S.TextSection>
    </S.Container>
  );
}
