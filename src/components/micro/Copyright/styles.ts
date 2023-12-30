import { theme } from "@/styles/theme";
import styled from "styled-components";

export const CopyrightWrapper = styled.div`
  font-size: 0.8rem;
  text-align: center;
  color: ${(props) => props.color || `${theme.colors.light10}`};
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.5rem;
  letter-spacing: 0.11rem;
  font-family: Montserrat;
`;
