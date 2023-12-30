import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  min-height: 546px;
  background-color: ${theme.colors.light10};
`;

export const TextSection = styled.div`
  padding: 0rem 8rem 10rem 8rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 7.2rem 2rem 5rem 2rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3.5rem;
  width: 100%;

  @media (max-width: 1670px) {
    justify-content: space-evenly;
  }
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

export const Layout = styled.div`
  width: 480px;
  max-width: 100%;
  min-height: 299px;
  border-radius: 5px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Absolute = styled.div`
  position: absolute;
  width: 189px;
  height: 39px;
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  padding-left: 70px;
`;