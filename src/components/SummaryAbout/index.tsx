import * as S from "./styles";
import Flex from "../micro/Flex";
import Text from "../micro/Text";
import { TEXT } from "./constants";
import { useTranslation } from "react-i18next";

export default function SummaryAbout() {
  const { t, i18n } = useTranslation();
  return (
    <S.Container>
      <Text variant="section-watermark" component="h1">
      {TEXT.TEXT_DEVELOPER}
      </Text>
      <S.TextSection>
        <Text variant="title-logo">{TEXT.NAME_LOGO}</Text>
        <Flex gap="2.2rem" flexDirection="column">
          <Text variant="main-text-about-me">{t("softwareDeveloper")}</Text>
          <Text variant="final-text-about-me">{t("overThePast")}</Text>
        </Flex>
      </S.TextSection>
    </S.Container>
  );
}
