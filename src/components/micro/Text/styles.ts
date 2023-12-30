import styled, { css } from "styled-components";
import { TextProps } from "./types";

const textVariants = {
  "title-banner": css`
    color: ${({ theme }) => theme.colors.white};
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
  "text-icon": css`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 800;
    line-height: 2.5rem;
    letter-spacing: 0.11rem;
    user-select: none;
    font-family: "Inter", sans-serif;
  `,
  "text-description-left": css`
    color: ${({ theme }) => theme.colors.white};
    font-family: Montserrat;
    font-size: 3.8rem;
    line-height: 4.2rem;
    font-weight: 800;
    max-width: 550px;
    text-align: right;

    @media (max-width: 912px) {
      max-width: 100%;
      text-align: center;
    }
  `,

  "text-description-right": css`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.3rem;
    letter-spacing: 0.11rem;
    font-family: "Inter", sans-serif;
    height: auto;
    max-width: 650px;

    @media (max-width: 912px) {
      max-width: 100%;
      text-align: center;
    }
  `,

  "title-footer": css`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5rem;
    letter-spacing: 0.15rem;
    font-family: "Montserrat", sans-serif;
    max-width: 20.5rem;
    min-height: 4rem;
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
      max-width: 100%;
    }
  `,

  "text-footer": css`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.9rem;
    letter-spacing: 0.11rem;
    font-family: "Montserrat", sans-serif;
    max-width: 311px;

    @media (max-width: 718px) {
      max-width: 100%;
    }
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
