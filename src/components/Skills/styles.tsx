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
  padding: 7.2rem 2rem 5rem 2rem;
  align-items: center;

  @media (max-width: 79rem) {
    flex-direction: column;
    padding-top: 25px;
    //align-items: center;
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

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;    
  @media (max-width: 750px) {
      align-items: center;
    }
`;

export const TitleSection = styled.div`
  display: flex;
  padding: 7.2rem 2rem 5rem 2rem;
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
