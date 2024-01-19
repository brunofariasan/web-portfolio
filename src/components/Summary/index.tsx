import * as S from "./styles";
import Text from "@/components/micro/Text";
import { TEXT } from "./constants";
import IcomoonIcon from "../micro/Icon";
import { useTranslation } from "react-i18next";

export default function Summary() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <S.Container>
      <S.CardSection>
        <S.FlexContainer>
          <S.FlexItem>
            <IcomoonIcon iconName="icon-world" size="xxxhuge" color="white" />
            <Text variant="text-icon">{t("scalableWebsite")}</Text>
          </S.FlexItem>
          <S.FlexItem>
            <IcomoonIcon
              iconName="icon-paint-roller"
              size="xxxhuge"
              color="white"
            />
            <Text variant="text-icon">{t("adaptedAccording")}</Text>
          </S.FlexItem>
          <S.FlexItem>
            <IcomoonIcon
              iconName="icon-pencil-ruler"
              size="xxxhuge"
              color="white"
            />
            <Text variant="text-icon">{t("codePixel")}</Text>
          </S.FlexItem>
          <S.FlexItem>
            <IcomoonIcon iconName="icon-love" size="xxxhuge" color="white" />
            <Text variant="text-icon">{t("developedLove")}</Text>
          </S.FlexItem>
        </S.FlexContainer>
      </S.CardSection>
      <S.TextSection>
        <S.FlexEnd>
          <Text variant="text-description-left">{t("niceToMeet")}</Text>
        </S.FlexEnd>
        <S.Text>
          <Text variant="text-description-right">{t("excellentSoftware")}</Text>
        </S.Text>
      </S.TextSection>
    </S.Container>
  );
}
