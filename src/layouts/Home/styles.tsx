import { motion } from 'framer-motion';
import styled, { css } from "styled-components";
import { HomeProps } from "./types";

export const Main = styled.main<HomeProps>`
  padding: 0 6rem;

  ${({ homeImg }) => css`
    background-size: cover;
    background-position: center;
  `}

  @media (max-width: 500px) {
    padding: 0 2rem;
  }
`;

export const Div = styled.div`
color: black;
  background-color: rgba(0, 0, 0, 0.70);
`;

export const StyledDiv = styled(motion.div)`
  width: 3px;
  height: 80%;
  background: #FFFFFF;
  border-radius: 4px;
  position: fixed;
  top: 0;
  left: 0;
  margin-right: -14px;
  transform-origin: center top;
`;
