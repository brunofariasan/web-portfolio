import { theme } from "@/styles/theme";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Main = styled.main`
  padding: 0 6rem;

  @media (max-width: 500px) {
    padding: 0 2rem;
  }
`;

export const Div = styled.div`
  color: black;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const StyledDiv = styled(motion.div)`
  width: 3px;
  height: 80%;
  background: #ffffff;
  border-radius: 4px;
  position: fixed;
  top: 0;
  left: 0;
  margin-right: -14px;
  transform-origin: center top;
`;
