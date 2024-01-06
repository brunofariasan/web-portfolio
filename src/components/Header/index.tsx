import React, { useState, useEffect } from "react";
import { HeaderWrapper, MenuIcon, Menu, CloseButton } from "./styles";
import Text from "../micro/Text";
import Flex from "../micro/Flex";
import Copyright from "../micro/Copyright";
import Icon from "../micro/Icon";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 200);
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
      <HeaderWrapper scrolled={scrolled}>
        <Text variant="bruno-faria-log">Bruno Faria</Text>
        <MenuIcon
          onClick={() => setMenuOpen(!menuOpen)}
          className={menuOpen ? "active" : ""}
        >
          {/* <Text variant="text-menu-logo">MENU</Text> */}
          <Icon iconName="icon-menu" size="big" color="light10" />
          <Text variant="text-language">en</Text>
        </MenuIcon>
      </HeaderWrapper>
      <Menu isOpen={menuOpen}>
        <Flex height="10vh" width="100%" justify="flex-end">
          <CloseButton onClick={() => setMenuOpen(false)}>
            <Text variant="text-menu-logo">FECHAR</Text>
            <Icon iconName="icon-close" size="big" color="light10" />
          </CloseButton>
        </Flex>
        <Flex
          height="85vh"
          justify="center"
          p="5rem"
          pb="10rem"
          pt="10rem"
          flexDirection="column"
          align="center"
        >
          <Text variant="text-menu">MENU</Text>
          <Text variant="text-name-menu">Teste1</Text>
          <Text variant="text-name-menu">Teste2</Text>
          <Text variant="text-name-menu">Teste3</Text>
        </Flex>
        <Copyright />
      </Menu>
    </>
  );
};

export default Header;
