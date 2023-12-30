import Flex from "../micro/Flex";
import Text from "../micro/Text";
import { TEXT } from "./constants";
import * as S from "./styles";
import { mockItems } from "./mockData";
import Image from "../micro/Image";

export default function SelectedProjects() {

  return (
    <S.Container>
      <S.TextSection>
        <Text variant="title-logo">{TEXT.NAME_LOGO}</Text>
        <Flex gap="3.5rem" flexDirection="column">
          <Text variant="main-text-about-me">{TEXT.MAIN_TITLE}</Text>
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
                    <Text variant="title-logo">Parceiro</Text>
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
