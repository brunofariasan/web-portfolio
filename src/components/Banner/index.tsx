import * as S from "./styles";
import Text from "@/components/micro/Text";
import imge from "../../assets/thumbnail-1.png";
import Flex from "../micro/Flex";
import { TEXT } from "./constants";

export default function Banner() {
  return (
    <S.Container>
      <S.BannerImg bannerImg={imge.src}>
        <Flex
          justify="center"
          height="100vh"
          width="460px"
          align="center"
          flexDirection="column"
          gap="15px"
        >
          <Text variant="title-banner">{TEXT.TITLE_BANNER}</Text>
          <Text variant="title-banner-sub">{TEXT.SUB_TITLE_BANNER}</Text>
        </Flex>
      </S.BannerImg>
    </S.Container>
  );
}
