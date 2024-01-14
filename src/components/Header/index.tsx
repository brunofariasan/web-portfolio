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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);
  
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
          <Text
            variant="text-language"
            headerColor={dynamicHeader && informationColor}
            dynamicHeader={dynamicHeader && !scrolled}
          >
            en
          </Text>
        </S.MenuIcon>
      </S.HeaderWrapper>
      <S.Menu isOpen={menuOpen}>
        <Flex height="10vh" width="100%" justify="flex-end">
          <S.CloseButton onClick={() => setMenuOpen(false)}>
            <Text variant="text-menu-logo">FECHAR</Text>
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
                  {item.name}
                </S.TextNameMenu>
              </Link>
            ))}
          </S.Section>
        </Flex>
        <Copyright />
      </S.Menu>
    </>
  );
};

export default Header;
