import * as S from "./styles";
import Image from "../micro/Image";
import Flex from "../micro/Flex";
import Text from "../micro/Text";
import { TEXT } from "./constants";
import { mockItems } from "./mockData";
import { useTranslation } from "react-i18next";

export default function SelectedProjects() {
  const { t } = useTranslation();
  return (
    <S.Container>
      <S.TextSection>
        <Text variant="title-logo">{t("selectedProjects")}</Text>
        <Flex gap="3.5rem" flexDirection="column">
          <Text variant="main-text-projects">{t("topProjects")}</Text>
          <S.FlexContainer>
            {mockItems.map((item, index) => (
              <S.Layout key={index}>
                <Flex maxWidth="100%" justify="space-between">
                  <Flex pl="2.2rem" pt="2.2rem">
                    <Text variant="title-logo">{item.date}</Text>
                  </Flex>
                  <Flex>
                    <Flex width="100%">
                      <Image
                        src={item.logo.src}
                        alt="Logo Livelo"
                        width={"180px"}
                        opacity={0.1}
                      />
                    </Flex>
                    {item.new !== null && (
                      <S.Absolute>
                        <Text variant="title-logo">{item.new}</Text>
                      </S.Absolute>
                    )}
                  </Flex>
                </Flex>
                <Flex
                  flexDirection="column"
                  p="2.2rem"
                  height="250px"
                  justify="space-between"
                >
                  <Text variant="card-description">{item.description}</Text>
                  <Flex flexDirection="column" gap="1rem">
                    {item.partner &&
                      <Text variant="title-logo">Parceiro</Text>
                    }
                    <Image
                      src={item.logo.src}
                      alt="Logo Livelo"
                      width={"50%"}
                    />
                  </Flex>
                </Flex>
              </S.Layout>
            ))}
          </S.FlexContainer>
        </Flex>
      </S.TextSection>
    </S.Container>
  );
}
