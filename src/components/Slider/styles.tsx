import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div``;

export const Section = styled.div`
  color: ${({ theme }) => theme.colors.black};
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Main = styled.main`
  padding: 6rem;

  @media (max-width: 750px) {
    padding: 0rem 2rem 0rem 2rem;
  }
`;

export const ProgressIndicator = styled(motion.div)`
  width: 3px;
  height: 80%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  position: fixed;
  top: 0;
  left: 0;
  margin-right: -14px;
  transform-origin: center top;
`;
