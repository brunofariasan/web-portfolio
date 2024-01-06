import { theme } from "@/styles/theme";
import styled from "styled-components";

export const HeaderWrapper = styled.header<{ scrolled: boolean }>`
  width: 100%;
  min-height: 6rem;
  position: fixed;
  top: 0;
  background-color: ${(props) => (props.scrolled ? "#333" : "transparent")};
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  padding: 3rem 3rem;
  z-index: 5;
  justify-content: space-between;
  transition: 0.6s;
  opacity: 10;
  pointer-events: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transform: translateY(0px);

  @media (max-width: 750px) {
    padding: 2rem 2rem;
    max-height: 6rem;
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

export const Div = styled.div`

`;
