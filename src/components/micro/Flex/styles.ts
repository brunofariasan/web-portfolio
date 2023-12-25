// src/components/FlexBox/FlexBoxStyles.ts

import styled from "styled-components";
import { StyledFlexProps } from "./types";

export const FlexBoxContainer = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
`;
