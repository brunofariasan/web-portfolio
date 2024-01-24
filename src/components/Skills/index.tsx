import Flex from "../micro/Flex";
import Icon from "../micro/Icon";
import Image from "../micro/Image";
import Text from "../micro/Text";
import { TEXT } from "./constants";
import { listIcons } from "./mockData";
import * as S from "./styles";
import Ai from "../../assets/Badge-Ai.svg";
export default function Skills({ icon }: any) {
  return (
    <S.Container>
      {/* <S.TextSection>
        <Text variant="project-quantity" component="h1">
          15+
        </Text>
        <S.Div>
          <Text variant="project-title" component="h1">
            PROJECTS COMPLETED
          </Text>
          <Text variant="project-text" component="h1">
            Nos ultimos 3 anos tenho trabalhado em grandes clientes da Compass.
            Nas horas vagas gosto de curtir uma boa musica e um filme
          </Text>
        </S.Div>
      </S.TextSection> */}
      <S.SkillSection>
        {/* <Text variant="section-watermark" component="h1">
          {TEXT.MAIN_TITLE}
        </Text> */}
        <S.TitleSection>
        {/* <Text variant="main-text-projects">{t("topProjects")}</Text> */}
          <Text variant="main-text-to-skill">
            {TEXT.TEXT_MAIN_TECHNOLOGIES}
          </Text>
          {listIcons.map((proj: any, i: any) => (
            <S.IconSection key={i}>
              {proj.icons.map((iconName: string, j: number) => (
                <Icon
                  iconName={iconName}
                  size="xxxhuge"
                  color="black"
                  key={`${i}-${j}`}
                />
              ))}
              <Image src={Ai.src} alt="Ai" width={50} />
            </S.IconSection>
          ))}
        </S.TitleSection>
      </S.SkillSection>
    </S.Container>
  );
}
