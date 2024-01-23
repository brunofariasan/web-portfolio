import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  min-height: 546px;
  background-color: ${theme.colors.light10};
`;

export const TextSection = styled.div`
max-width: 1800px;
padding: 10.2rem 8rem 10rem 8rem;
 // width: 1628px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 750px) {
    padding: 7.2rem 3rem 10rem 3rem;
  }
`;

export const FlexContainer = styled.div`
   display: flex;
  flex-wrap: wrap;
  gap: 3rem;
 // max-width: 1610px;
  /* @media (max-width: 1670px) {
    justify-content: space-evenly;
  }
  @media (max-width: 550px) {
    justify-content: center;
  } */

  @media (max-width: 1190) {
  //flex-wrap: initial;
  

  } 
`;

export const Layout = styled.div`
  width: 480px;
  max-width: 100%;
  min-height: 299px;
  border-radius: 5px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1800px) {
    max-width: 756px;
    max-width: 100%;
  } 
  @media (max-width: 1190px) {
  flex: 1;


  } 
`;

export const Absolute = styled.div`
  position: absolute;
  width: 189px;
  height: 39px;
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  padding-left: 70px;
`;