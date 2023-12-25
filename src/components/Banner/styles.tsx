import styled, { css } from "styled-components";
import { BannerProps } from "./types";

export const Container = styled.div`
  height: 100vh;
`;

export const BannerImg = styled.section<BannerProps>`
  ${({ bannerImg }) => css`
    background-image: ${`url(${bannerImg})`};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
  `}
`;
