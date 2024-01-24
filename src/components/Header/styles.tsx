import { theme } from "@/styles/theme";
import styled from "styled-components";

export const HeaderWrapper = styled.header<{ scrolled: boolean }>`
  width: 100%;
  max-height: 7rem;
  position: fixed;
  top: 0;
  background-color: ${(props) => (props.scrolled ? "#333" : "transparent")};
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  padding: 1.3rem 3rem;
  z-index: 5;
  justify-content: space-between;
  transition: 0.6s;
  opacity: 10;
  pointer-events: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transform: translateY(0px);

  @media (max-width: 750px) {
    padding: 1rem 2rem;
    max-height: 4.5rem;
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.99);
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "100%")};
  z-index: 1000;
  overflow-x: hidden;
  transition: right 0.4s cubic-bezier(0.3, 0, 0.5, 1);
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Section = styled.ul``;

export const TextNameMenu = styled.li<{ isActive: boolean }>`
 margin: 0;
  padding: 0;
  list-style: none;
  font-family: Montserrat;
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 2.4px;
  transition: background-color 0.3s ease;
  color: ${(props) => (props.isActive ? "#f2f2f2" : "#878a8f")};
  &:hover {
    color: #f2f2f2;
  }
`;

export const Div = styled.div`
  display: flex;
  //gap: 1.5rem;
  font-family: Poppins;
  text-transform: uppercase;
  font-size: 18px;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  background-color: transparent;

  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  @media (max-width: 750px) {
    //min-width: 100%;
    justify-content: center;
  }
`;

export const Navbar = styled.div`
  @media (max-width: 900px) {
    Nav {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  Ul {
    display: flex;
  }
`;

export const Ul = styled.ul`
  A:hover {
    border-bottom: 2px solid yellow;
  }
`;

export const Li = styled.li`
  //height: 1rem;
  //width: 105px;
  display: flex;
  align-items: center;

  @media (max-width: 750px) {
    /* min-width: 100%;
    justify-content: center; */
  }
`;

export const LanguageSelectionSession = styled.div`
  width: 80px;
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 750px) {
    height: 25px;

  }
`;

export const IdiomaName = styled.div`
  cursor: pointer;
  background-color: transparent;
`;

export const Idioma = styled.p`
  color: white;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  color: #FFFFFF;
    text-align: center;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5rem;
    letter-spacing: 2px;
    font-family: 'Montserrat';

  &:hover {
    color: #ffb800;
  }
`;

export const SectionButton = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  position: absolute;
  top: 48px;
  gap: 5px;
  img {
    border-radius: 20%;
  }

  @media (max-width: 750px) {
    //mobile
   
  }
`;

export const A = styled.a`
  color: black;
  font-size: 16px;
  display: inline-block;
  text-decoration: none;
  transition: background 0.4s;
  text-transform: uppercase;
  cursor: pointer;
`;
