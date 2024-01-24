import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  min-height: 35rem;
  background-color: ${theme.colors.darkCharcoal};
  padding-left: clamp(0.1rem, 1.8rem + 2.9vw, 34.2rem);
  padding-right: clamp(0.1rem, 1.8rem + 2.9vw, 34.2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  position: sticky;
  z-index: 10;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding: 5rem 0 0px;

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

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 900px) {
    div {
      flex: 1 0 calc(50% - 12.5px);
    }
  }

  @media (max-width: 550px) {
    justify-content: center;
  }
`;
