import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${(props) => props.color || `${theme.colors.light10}`};
  margin: 1.8rem 0;
`;
