import styled, { css } from "styled-components";
import { IconProps } from "./types";

export const I = styled.i<IconProps>`
  ${({ theme, size, color }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes[size]};
  `}
`;
