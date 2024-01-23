import React, { useState, useEffect } from "react";
import * as S from "./styles";
import Text from "../micro/Text";
import Flex from "../micro/Flex";
import Copyright from "../micro/Copyright";
import Icon from "../micro/Icon";
import Link from "next/link";
import { mockItems } from "./mockData";
import useWindowSize from "@/hooks/useWindowSize";
import { HeaderProps } from "./types";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import usa from "../../assets/eua.svg";
import br from "../../assets/br.svg";
import { changeLanguage } from "i18next";

const Header = ({ dynamicHeader, informationColor = "white" }: HeaderProps) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const { width } = useWindowSize();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t, i18n } = useTranslation();
  const i18nRef = React.useRef(i18n);
  const [curentLanguage, setCurentLanguage] = useState(i18n.language); // Use i18n.language directly
  const [showDiv, setShowDiv] = useState(false);

  const handleLanguage = () => {
    const newLanguage = curentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurentLanguage(newLanguage);
    setShowDiv(!showDiv);
  };

  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>
      <S.HeaderWrapper scrolled={scrolled}>
        <Link href="/">
          <Text
            variant="bruno-faria-log"
            headerColor={dynamicHeader && informationColor}
            dynamicHeader={dynamicHeader && !scrolled}
          >
            Bruno Faria
          </Text>
        </Link>
        <S.Div>
          <S.MenuIcon
            onClick={() => setMenuOpen(!menuOpen)}
            className={menuOpen ? "active" : ""}
          >
            {/* <Text variant="text-menu-logo">MENU</Text> */}
            <Icon
              iconName="icon-menu"
              size={width < 700 ? "large" : "big"}
              color={!scrolled ? informationColor : "white"}
            />
          </S.MenuIcon>

          <S.Li>
            {width >= 750 && (
              <S.LanguageSelectionSession onClick={handleButtonClick}>
                <S.IdiomaName>
                  <Text
                    variant="text-language"
                    headerColor={dynamicHeader && informationColor}
                    dynamicHeader={dynamicHeader && !scrolled}
                  >
                    {curentLanguage}
                  </Text>
                </S.IdiomaName>

                {showDiv && (
                  <S.SectionButton>
                    <S.Button>
                      {curentLanguage === "pt" ? (
                        <img src={usa.src} onClick={handleLanguage} />
                      ) : (
                        <img src={br.src} onClick={handleLanguage} />
                      )}
                    </S.Button>
                  </S.SectionButton>
                )}
              </S.LanguageSelectionSession>
            )}
          </S.Li>
        </S.Div>
      </S.HeaderWrapper>
      <S.Menu isOpen={menuOpen}>
        <Flex height="10vh" width="100%" justify="flex-end">
          <S.CloseButton onClick={() => setMenuOpen(false)}>
            <Text variant="text-menu-logo">{t("close")}</Text>
            <Icon iconName="icon-close" size="big" color="light10" />
          </S.CloseButton>
        </Flex>
        <Flex
          height="85vh"
          justify="center"
          pb="10rem"
          pt="10rem"
          flexDirection="column"
          align="center"
        >
          <Text variant="text-menu">MENU</Text>
          <S.Section onClick={() => setMenuOpen(false)}>
            {mockItems.map((item, index) => (
              <Link href={item.url} key={index}>
                <S.TextNameMenu isActive={currentPath === item.pageName}>
                  {t(item.url)}
                </S.TextNameMenu>
              </Link>
            ))}
          </S.Section>
          <S.Li>
          {width <= 750 && (
            <S.LanguageSelectionSession onClick={handleButtonClick}>
              <S.IdiomaName>
                <S.Idioma>{curentLanguage}</S.Idioma>
              </S.IdiomaName>
              {showDiv && (
                <S.SectionButton onClick={handleLanguage}>
                  <S.Idioma>
                    {curentLanguage === "pt"
                      ? t("english") + " - "
                      : t("portuguese") + " - "}
                  </S.Idioma>
                  <S.Button>
                    {curentLanguage === "en" ? (
                      <img src={br.src} />
                    ) : (
                      <img src={usa.src} />
                    )}
                  </S.Button>
                </S.SectionButton>
              )}
            </S.LanguageSelectionSession>
          )}
          </S.Li>
        </Flex>
        <Copyright />
      </S.Menu>
    </>
  );
};

export default Header;
