import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  min-height: 546px;
  background-color: ${theme.colors.light10};
`;

export const TextSection = styled.div`
  max-width: 180rem;
  padding: 10.2rem 8rem 10rem 8rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 750px) {
    padding: 7.2rem 3rem 10rem 3rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const Layout = styled.div`
  width: 48rem;
  max-width: 100%;
  min-height: 29.9rem;
  border-radius: 0.5rem;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1800px) {
    max-width: 75.6rem;
    max-width: 100%;
  }
  @media (max-width: 1190px) {
    flex: 1;
  }
`;

export const Absolute = styled.div`
  position: absolute;
  width: 18.9rem;
  height: 3.9rem;
  display: flex;
  justify-content: space-around;
  padding-top: 1.5rem;
  padding-left: 7rem;
`;
