import styled, { css } from "styled-components";
import { TextProps } from "./types";
import { theme } from "@/styles/theme";

const textVariants = {
  "title-banner": css`
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(0.1rem, 2.8rem + 2.9vw, 6rem);
    letter-spacing: 0.5rem;
    line-height: clamp(0.1rem, 3.2rem + 2.9vw, 6.2rem);
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
    padding: 0 2.5rem 0 2.5rem;
  `,
  "text-icon": css`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1.8rem;
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
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 100;
    line-height: 1.9rem;
    letter-spacing: 0.11rem;
    font-family: "Montserrat", sans-serif;
    max-width: 31.1rem;
    position: relative;
    transition: color 0.3s ease;

    @media (max-width: 718px) {
      max-width: 100%;
    }

    &:hover {
      color: #d9d9d9;
    }

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0; /* Começa com largura 0 para efeito de preenchimento automático */
      height: 1px; /* Altura da linha */
      background-color: #d9d9d9;
      transition: width 0.3s ease; /* Adiciona transição suave para a largura ao passar o mouse */
    }

    &:hover:before {
      width: 90%; /* Define a largura como 100% ao passar o mouse, preenchendo automaticamente */
    }

    @media (max-width: 750px) {
      //font-size: 1.8rem;
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
    line-height: 7rem;

    @media (max-width: 750px) {
      font-size: clamp(0.1rem, 2.8rem + 1.9vw, 4rem);
      line-height: clamp(0.1rem, 2.8rem + 2.9vw, 4.6rem);
      letter-spacing: 0rem;
    }
  `,

  "section-watermark-white": css`
    color: rgba(255, 255, 255, 0.04);
    font-family: "Montserrat";
    font-size: clamp(0.1rem, 2.8rem + 2.9vw, 9.6rem);
    font-style: normal;
    font-weight: 700;
    line-height: 6rem; /* 26.042% */
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
    line-height: clamp(0.1rem, 1.8rem + 2.9vw, 4.5rem);
    letter-spacing: 0.3rem;
    max-width: 50rem;
  `,

  "main-text-projects": css`
    font-family: "Montserrat";
    font-size: clamp(0.1rem, 1.8rem + 2.9vw, 4.8rem);
    font-style: normal;
    font-weight: 700;
    line-height: clamp(0.1rem, 1.8rem + 2.9vw, 4.5rem);
    letter-spacing: 0.3rem;
    max-width: 34rem;
  `,

  "main-text-to-skill": css`
    font-family: "Montserrat";
    font-size: clamp(0.1rem, 1.8rem + 2.9vw, 4.8rem);
    font-style: normal;
    font-weight: 900;
    line-height: clamp(0.1rem, 1.8rem + 2.9vw, 4.5rem);
    letter-spacing: 0.3rem;
  `,

  "main-text-to-slide": css`
    font-family: "Montserrat";
    font-size: clamp(0.1rem, 1.8rem + 2.9vw, 4.8rem);
    font-style: normal;
    font-weight: 900;
    line-height: clamp(0.1rem, 1.8rem + 2.9vw, 4.5rem);
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.6;
    text-align: center;
    padding-top: 11rem;
    position: absolute;
    z-index: 15;
    top: 0rem;

    @media (max-width: 750px) {
      padding-top: 7rem;
      font-size: clamp(0.1rem, 1.8rem + 2.9vw, 2.8rem);
      letter-spacing: 0rem;
      padding-bottom: 2rem;
    }

    @media (max-height: 640px) {
      font-size: clamp(0.1rem, 1.8rem + 2.9vw, 2.5rem);
    }
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
    @media (max-width: 750px) {
      width: 100%;
      text-align: end;
      font-size: 1.3rem;
    }
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

    @media (max-width: 750px) {
      text-align: end;
      font-size: 2.3rem;
    }
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

    @media (max-width: 750px) {
      text-align: end;
    }
  `,

  "text-main-technologies": css`
    font-family: Montserrat;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.4rem;
    letter-spacing: 4.32px;

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

    @media (max-width: 750px) {
      text-align: center;
    }
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
    letter-spacing: 2px;
    max-width: 33rem;

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
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5rem;
    letter-spacing: 2px;
    font-family: "Montserrat";
  `,

  "title-section-slider": css`
    color: ${theme.colors.white};
    font-family: Montserrat;
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 4.32px;
  `,

  "title-section-card": css`
    font-family: "Montserrat";
    font-size: clamp(0.1rem, 1.8rem + 2.9vw, 4.8rem);
    font-style: normal;
    font-weight: 700;
    line-height: clamp(0.1rem, 1.8rem + 2.9vw, 5rem);
    padding-top: 5rem;
  `,

  "text-tech-slide": css`
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.9rem;
    letter-spacing: 0.11rem;
    font-family: "Montserrat", sans-serif;
    max-width: 31.1rem;
    position: relative;
    transition: color 0.3s ease;
  `,

  "language-text": css`
    text-transform: uppercase;
    white-space: nowrap;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5rem;
    letter-spacing: 2px;
    font-family: "Montserrat";

    &:hover {
      color: #ffb800;
    }
  `,

  "card-title": css`
    font-family: Montserrat;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5rem;
    letter-spacing: 2px;
  `,

  "card-description-slide": css`
    text-align: start;
    font-family: inter;
    font-size: 1.6rem;
    font-weight: 500;
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
