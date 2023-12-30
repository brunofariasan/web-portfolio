import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  min-height: 546px;
  background-color: ${theme.colors.light10};
`;

export const TextSection = styled.div`
  padding: 10.2rem 8rem 0rem 8rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 7.2rem 2rem 5rem 2rem;
  }
`;
