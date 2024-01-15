import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  min-height: 430px;
  background-color: ${theme.colors.darkCharcoal};
  padding-left: clamp(0.1rem, 1.8rem + 2.9vw, 34.2rem);
  padding-right: clamp(0.1rem, 1.8rem + 2.9vw, 34.2rem);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 90px 0 0px;

  @media (max-width: 1200px) {
    padding-left: clamp(0.1rem, 0.8rem + 8.9vw, 36.2rem);
    padding-right: clamp(0.1rem, 0.8rem + 8.9vw, 36.2rem);
  }
  @media (max-width: 1032px) {
    flex-wrap: wrap;
  }
  @media (max-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const FlexTitle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 311px;
  gap: 20px;

  @media (max-width: 750px) {
    align-items: center;;
  }
`;

export const TextSection = styled.div`
  padding-left: clamp(0.1rem, 1.8rem + 15.9vw, 36.2rem);
  padding-right: clamp(0.1rem, 1.8rem + 15.9vw, 36.2rem);
  display: flex;
  gap: 35px;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    padding-bottom: clamp(0.1rem, 1.8rem + 15.9vw, 36.2rem);
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
  max-width: 700px;

  @media (max-width: ${theme.breakpoints.lg}) {
    text-align: center;
    max-width: 100%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 35px;

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
  gap: 10px;
`;
