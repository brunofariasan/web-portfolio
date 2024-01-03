import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  min-height: 54.6rem;
  background-color: ${theme.colors.light10};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextSection = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  min-height: 24.2rem;
  display: flex;
  justify-content: space-between;
  padding-left: 6rem;
  padding-right: 4rem;
  align-items: center;

  @media (max-width: 79rem) {
    flex-direction: column;
    padding-top: 25px;
    padding-bottom: 2.5rem;
    gap: 4.5rem;
  }
`;

export const SkillSection = styled.div`
  min-height: 34.4rem;
  mix-blend-mode: luminosity;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TitleSection = styled.div`
  display: flex;
  padding: 5rem;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 50rem) {
    flex-direction: column;
  }
`;

export const IconSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;

  @media (max-width: 50rem) {
    max-width: 100%;
  }
`;
