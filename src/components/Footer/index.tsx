import * as S from "./styles";
import Text from "@/components/micro/Text";
import { TEXT } from "./constants";
import Flex from "../micro/Flex";
import { mockItems, mockRedes } from "./mockData";
import { Line } from "../micro/Line";
import { theme } from "@/styles/theme";
import Copyright from "../micro/Copyright";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { width } = useWindowSize();
  const br = width > 830 ? <br /> : "";
  const { t } = useTranslation();
  return (
    <S.Container>
      <S.TitleSection>
        <S.FlexContainer>
          <Flex flexDirection="column" gap="2rem">
            <Text variant="title-footer">
              {t("footerContact")} {br} {t("information")}
            </Text>
            <Text variant="text-footer">{t("feelFree")}</Text>
            <Link href="contact">
              <Text variant="text-footer">{TEXT.TEXT_EMAIL}</Text>
            </Link>
          </Flex>
        </S.FlexContainer>
        <Flex flexDirection="column" gap="2rem">
          <Text variant="title-footer">
            {t("latest")} {br} {t("projectsText")}{" "}
          </Text>
          <Flex gap="1rem" flexDirection="column">
            {mockItems.map((item, index) => (
              <Link href={item.url} key={index}>
                <Text variant="text-footer">{t(item.name)}</Text>
              </Link>
            ))}
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="2rem">
          <Text variant="title-footer">
            {t("follow")} {br} {t("me")}{" "}
          </Text>
          <Flex gap="1rem" flexDirection="column">
            {mockRedes.map((item, index) => (
              <Link href={item.url} key={index}>
                <Text variant="text-footer">{item.name}</Text>
              </Link>
            ))}
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="2rem">
          <Text variant="title-footer">{TEXT.TITLE_SKILLS}</Text>
          <Link href="about">
            <Text variant="text-footer">{TEXT.SKILLS}</Text>
          </Link>
        </Flex>
      </S.TitleSection>
      <Flex flexDirection="column" pb="1.3rem">
        <Line color={theme.colors.deepCharcoalBlue} />
        <Copyright color={theme.colors.light10} />
      </Flex>
    </S.Container>
  );
}
