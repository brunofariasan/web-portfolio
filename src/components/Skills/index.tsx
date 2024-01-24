import * as S from "./styles";
import Icon from "../micro/Icon";
import Image from "../micro/Image";
import Text from "../micro/Text";
import { listIcons } from "./mockData";
import Ai from "../../assets/Badge-Ai.svg";
import { useTranslation } from "react-i18next";

export default function Skills({ icon }: any) {
  const { t } = useTranslation();
  return (
    <S.Container>
      <S.SkillSection>
        <S.TitleSection>
          <Text variant="main-text-to-skill">{t("topSkills")}</Text>
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
              <Image src={Ai.src} alt="logo" width={50} />
            </S.IconSection>
          ))}
        </S.TitleSection>
      </S.SkillSection>
    </S.Container>
  );
}
