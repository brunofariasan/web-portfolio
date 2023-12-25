import styled, { css } from "styled-components";
import { TextProps } from "./types";

const textVariants = {
  "title-banner": css`
    color: ${({ theme }) => theme.colors.white};
    //font-family: "Zen Dots", sans-serif;
    font-size: clamp(0.1rem, 2.8rem + 2.9vw, 6rem);
    letter-spacing: 0.5rem;
    line-height: clamp(0.1rem, 3.8rem + 2.9vw, 6.2rem);
    user-select: none;
    padding: 0 1.5rem 0 1.5rem;
  `,

  "title-banner-sub": css`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.12rem;
    user-select: none;
    padding: 0 1.5rem 0 1.5rem;
  `,
};

export const TextContainer = styled.span.attrs<TextProps>(({ component }) => ({
  as: component,
}))<TextProps>`
  ${({ variant }) => variant && textVariants[variant]}
  text-align:${({ textAlign }) => textAlign};

  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => theme.colors[color]};
    `}
`;

export const LinkTextContainer = styled.a``;
