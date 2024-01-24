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
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.5);
  transform: translateY(0rem);

  @media (max-width: 750px) {
    padding: 1rem 2rem;
    max-height: 4.5rem;
  }
`;

export const Div = styled.div`
  display: flex;
  font-family: Poppins;
  text-transform: uppercase;
  font-size: 1.8rem;
  align-items: center;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
`;

export const LanguageSelectionSession = styled.div`
  width: 8rem;
  height: 6.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 750px) {
    height: 2.5rem;
  }
`;

export const IdiomaName = styled.div`
  cursor: pointer;
  background-color: transparent;
`;

export const SectionButton = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  position: absolute;
  top: 4.8rem;
  gap: 0.5rem;
  img {
    border-radius: 20%;
  }
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
    justify-content: center;
  }
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
