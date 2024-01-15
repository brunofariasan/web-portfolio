import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  min-height: 800px;
  background-color: ${theme.colors.deepSlateBlue};
`;

export const CardSection = styled.div`
  padding: 228.64px 0 102.7px;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    padding: 135.64px 0 102.7px;
    padding-left: clamp(0.1rem,0.8rem + 1.9vw,36.2rem);
    padding-right: clamp(0.1rem,0.8rem + 1.9vw,36.2rem);
  }
`;

export const TextSection = styled.div`
  padding-left: clamp(0.1rem,1.8rem + 1.9vw,36.2rem);
  padding-right: clamp(0.1rem,1.8rem + 1.9vw,36.2rem);
  display: flex;
  gap: 3.5rem;
  justify-content: center;

  @media (max-width: 912px) {
    flex-direction: column;
    padding-bottom: 8rem;
  }
`;

export const FlexEnd = styled.div`
  display: flex;
  text-align: end;

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 100%;
    text-align: center;
  }
`;

export const Text = styled.div`
  max-width: 70rem;

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 100%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 3.5rem;
  width: 80%;

  @media (max-width: 1380px) {
  }
  @media (max-width: 900px) {
    div {
      flex: 1 0 calc(50% - 12.5px);
    }
  }
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

export const FlexItem = styled.div`
  flex: 0 0 calc(50% - 25px);
  box-sizing: border-box;
  max-width: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
