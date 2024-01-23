import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  //min-height: 54.6rem;
  background-color: ${theme.colors.light10};
`;

export const TextSection = styled.div`
  padding: 10.2rem 8rem 0rem 8rem;
  display: flex;
  flex-direction: column;
  max-width: 1800px;
  margin: 0 auto;
  @media (max-width: 750px) {
    padding: 7.2rem 3rem 5rem 3rem;
  }

  /* @media (max-width: 600px) {
    padding: 7.2rem 2rem 5rem 2rem;
  } */
`;
