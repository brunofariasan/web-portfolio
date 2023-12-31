import styled, { css } from "styled-components";
import { TextProps } from "./types";
import { theme } from "@/styles/theme";

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
    max-width: 55rem;
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
    max-width: 65rem;

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
    max-width: 31.1rem;

    @media (max-width: 718px) {
      max-width: 100%;
    }
  `,

  "section-watermark": css`
    color: rgba(0, 0, 0, 0.04);
    font-size: clamp(0.1rem, 2.8rem + 2.9vw, 9.6rem);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.9rem;
    font-family: "Montserrat";
    text-align: end;
    max-height: 11.1rem;
    line-height: 8.1rem;
  `,

  "section-watermark-white": css`
    color: rgba(255, 255, 255, 0.04);
    font-family: "Montserrat";
    font-size: 9.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 7rem; /* 26.042% */
    letter-spacing: 9.6px;
  `,

  "title-logo": css`
    font-family: "Inter";
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.2rem;
  `,

  "main-text-about-me": css`
    font-family: "Montserrat";
    font-size: clamp(0.1rem, 1.8rem + 2.9vw, 4.8rem);
    font-style: normal;
    font-weight: 700;
    line-height: clamp(0.1rem, 1.8rem + 2.9vw, 5rem);
    letter-spacing: 0.6rem;
    max-width: 50rem;
  `,

  "final-text-about-me": css`
    font-family: "Inter";
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.36rem;
    max-width: 76.2rem;
  `,

  "card-description": css`
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0.2px;
    max-width: 41rem;
  `,

  "small-text-about-me": css`
    font-family: Montserrat;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 2.34px;
  `,

  "medium-text-about-me": css`
    text-align: center;
    font-family: Montserrat;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 2.4px;
    max-width: 87.8rem;
  `,

  "end-text-about-me": css`
    text-align: center;
    font-family: Montserrat;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.7rem;
    letter-spacing: 2.88px;
    max-width: 80rem;
  `,

  "text-main-technologies": css`
    font-family: Montserrat;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.4rem;
    letter-spacing: 4.32px;
    max-width: 45.8rem;

    @media (max-width: 50rem) {
      max-width: 100%;
      text-align: center;
    }
  `,

  "project-quantity": css`
    font-family: Montserrat;
    font-size: 10.1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 1.1rem;
    min-width: clamp(0.1rem, 1.8rem + 45.9vw, 65rem);
    text-align: center;
  `,

  "project-title": css`
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0.2rem;
  `,

  "project-text": css`
    font-family: Montserrat;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.7rem;
    letter-spacing: 2.88px;
    max-width: 110rem;
  `,

  "title-on-top-of-map": css`
    font-family: Montserrat;
    font-size: 7.5rem;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 2.88px;
    color: #cfd0d2;
  `,

  "title-section-contact": css`
    color: ${theme.colors.white};
    font-family: Montserrat;
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.5rem;
    letter-spacing: 4px;
    max-width: 25rem;

    @media (max-width: 880px) {
      max-width: 100%;
    }
  `,

  "contact-section-title-description": css`
    color: ${theme.colors.white};
    font-family: Montserrat;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 2.34px;
  `,

  "description-contact": css`
    color: ${theme.colors.white};
    font-family: Montserrat;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.5rem;
    letter-spacing: 2.34px;
    max-width: 60rem;
    display: flex;
    align-self: auto;
  `,

  "text-name-menu": css`
    color: ${theme.colors.white};
    text-align: center;
    font-family: Montserrat;
    font-size: 3.4rem;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 2.4px;

    color: #878a8f;
    transition: background-color 0.3s ease;

    /* efeito de hover */
    &:hover {
      color: #f2f2f2;
    }
  `,

  "text-menu": css`
    color: #cecece;
    font-family: Montserrat;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 1.3px;
  `,

  "bruno-faria-log": css`
    color: ${theme.colors.white};
    text-align: center;
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.5rem;
    letter-spacing: 1.5px;
  `,

  "text-menu-logo": css`
    color: ${theme.colors.white};
    text-align: center;
    font-family: Montserrat;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 1.1px;
  `,

  "text-language": css`
    color: ${theme.colors.white};
    text-align: center;
    font-family: Zen Dots;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 2px;
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
