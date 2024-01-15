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

export default function Footer() {
  const { width } = useWindowSize();
  const br = width > 830 ? <br /> : "";
  return (
    <S.Container>
      <S.TitleSection>
        <S.FlexContainer>
          <Flex flexDirection="column" gap="20px">
            <Text variant="title-footer">Contact {br} information —</Text>
            <Text variant="text-footer">{TEXT.TEXT_FOOTER}</Text>
            <Text variant="text-footer">{TEXT.TEXT_EMAIL}</Text>
          </Flex>
        </S.FlexContainer>
        <Flex flexDirection="column" gap="20px">
          <Text variant="title-footer">Latest {br} projects —</Text>
          <Flex gap="6px" flexDirection="column">
            {mockItems.map((item, index) => (
              <Link href={item.url} key={index}>
                <Text variant="text-footer">{item.name}</Text>
              </Link>
            ))}
          </Flex>
        </Flex>

        <Flex flexDirection="column" gap="20px">
          <Text variant="title-footer">Follow {br} me on — </Text>
          <Flex gap="6px" flexDirection="column">
            {mockRedes.map((item, index) => (
              <Link href={item.url} key={index}>
                <Text variant="text-footer">{item.name}</Text>
              </Link>
            ))}
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="20px">
          <Text variant="title-footer">{TEXT.TITLE_THREE}</Text>
          <Text variant="text-footer">{TEXT.SKILLS}</Text>
        </Flex>
      </S.TitleSection>
      <Flex flexDirection="column">
        <Copyright color={theme.colors.light10} />
        <Line color={theme.colors.light10} />
      </Flex>
    </S.Container>
  );
}
