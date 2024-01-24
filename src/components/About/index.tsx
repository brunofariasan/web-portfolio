import * as S from "./styles";
import { useTranslation } from "react-i18next";
import Flex from "../micro/Flex";
import Text from "../micro/Text";
import { TEXT } from "./constants";

export default function About() {
  const { t } = useTranslation();
  return (
    <S.Container>
      <Text variant="section-watermark" component="h1">
        {TEXT.MAIN_TITLE}
      </Text>
      <S.TextSection>
        <Flex gap="0.5rem" flexDirection="column" align="center">
          <Text variant="small-text-about-me">{t("someWords")}</Text>
          <Text variant="medium-text-about-me">{t("myName")}</Text>
        </Flex>
      </S.TextSection>
    </S.Container>
  );
}
