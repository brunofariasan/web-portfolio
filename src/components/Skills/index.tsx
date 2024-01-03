import Flex from "../micro/Flex";
import Icon from "../micro/Icon";
import Text from "../micro/Text";
import { TEXT } from "./constants";
import * as S from "./styles";

export default function Skills() {
  return (
    <S.Container>
      <S.TextSection>
        <Text variant="project-quantity" component="h1">
          15+
        </Text>
        <Flex flexDirection="column" gap="20px">
          <Text variant="project-title" component="h1">
            PROJECTS COMPLETED
          </Text>
          <Text variant="project-text" component="h1">
            Nos ultimos 3 anos tenho trabalhado em grandes clientes da Compass.
            Nas horas vagas gosto de curtir uma boa musica e um filme
          </Text>
        </Flex>
      </S.TextSection>
      <S.SkillSection>
        <Text variant="section-watermark" component="h1">
          {TEXT.MAIN_TITLE}
        </Text>
        <S.TitleSection>
          <Text variant="text-main-technologies">
            {TEXT.TEXT_MAIN_TECHNOLOGIES}
          </Text>
          <S.IconSection>
            <Icon iconName="icon-react" size="xxxhuge" color="darkCharcoal" />
            <Icon iconName="icon-scrum" size="xxxhuge" color="darkCharcoal" />
            <Icon iconName="icon-next-js" size="xxxhuge" color="darkCharcoal" />
            <Icon
              iconName="icon-javascript"
              size="xxxhuge"
              color="darkCharcoal"
            />
            <Icon iconName="icon-git" size="xxxhuge" color="darkCharcoal" />
            <Icon iconName="icon-jest" size="xxxhuge" color="darkCharcoal" />
            <Icon iconName="icon-less" size="xxxhuge" color="darkCharcoal" />
            <Icon
              iconName="icon-bitbucket"
              size="xxxhuge"
              color="darkCharcoal"
            />
          </S.IconSection>
        </S.TitleSection>
      </S.SkillSection>
    </S.Container>
  );
}
