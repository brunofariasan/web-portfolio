import * as S from "./styles";
import Text from "@/components/micro/Text";
import { TEXT } from "./constants";
import IcomoonIcon from "../micro/Icon";

export default function Summary() {
  return (
    <S.Container>
      <S.CardSection>
        <S.FlexContainer>
          <S.FlexItem>
            <IcomoonIcon iconName="icon-world" size="xxxhuge" color="white" />
            <Text variant="text-icon">{TEXT.TITLE_ONE}</Text>
          </S.FlexItem>
          <S.FlexItem>
            <IcomoonIcon
              iconName="icon-paint-roller"
              size="xxxhuge"
              color="white"
            />
            <Text variant="text-icon">{TEXT.TITLE_TWO}</Text>
          </S.FlexItem>
          <S.FlexItem>
            <IcomoonIcon
              iconName="icon-pencil-ruler"
              size="xxxhuge"
              color="white"
            />
            <Text variant="text-icon">{TEXT.TITLE_THREE}</Text>
          </S.FlexItem>
          <S.FlexItem>
            <IcomoonIcon iconName="icon-love" size="xxxhuge" color="white" />
            <Text variant="text-icon">{TEXT.TITLE_FOUR}</Text>
          </S.FlexItem>
        </S.FlexContainer>
      </S.CardSection>
      <S.TextSection>
        <S.FlexEnd>
          <Text variant="text-description-left">{TEXT.TEXT_ABOUT}</Text>
        </S.FlexEnd>
        <S.Text>
          <Text variant="text-description-right">{TEXT.TEXT_ABOUTI}</Text>
        </S.Text>
      </S.TextSection>
    </S.Container>
  );
}
