import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
  justify-content: flex-start;
  padding-top: 27rem;
  
  //*
  //mix-blend-mode: luminosity;

  @media (max-width: 750px) {
    padding-bottom: 0rem;
    padding-top: 16rem;
    //justify-content: flex-start;
   
  }
  

  &:hover {
    //mix-blend-mode: normal;
  }

  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    top: -25%;
    height: 500px;
    max-height: 100%;
    width: 1000px;
    max-width: 100%;
    border-radius: 25px;
    padding: 50px;
    transform-origin: top;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);

    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 750px) {
      padding: 40px 30px 30px 30px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -25%;
  min-height: 300px;
  width: 1000px;
  border-radius: 25px;
  padding: 50px;
  transform-origin: top;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 750px) {
    padding: 40px 30px 30px 30px;
  }
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  // padding-top: 4.6rem;
  opacity: 0.5;
  @media (max-width: 750px) {
    margin-top: 3rem;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 60%;
  //height: 100%;
  border-radius: 25px;
  overflow: hidden;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 5rem;
  gap: 5rem;
  min-height: 150px;
  justify-content: flex-end;

  @media (max-width: 750px) {
    flex-direction: column;
   gap: 0rem;
    margin-top: 1.5rem;
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  border-right: 1px solid rgba(0, 0, 0, 0.7);
  padding-right: 5rem;

  @media (max-width: 750px) {
    padding-right: 0rem;
    padding-bottom: 3rem;
    gap: 1.2rem;
    width: 80%;
    justify-content: center;
    border-right: 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  }
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  @media (max-width: 750px) {
    gap: 3rem;
  }
`;

export const H2 = styled.h2`
  font-family: Montserrat;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5rem;
  letter-spacing: 2px;
`;

export const H4 = styled.h2`
  text-align: start;
  font-family: "inter";
  //max-width: 540px;
  font-size: 1.6rem;
  //background-color: #727171;
  font-weight: 500;
`;

export const H5 = styled.h2`
  text-align: start;
  font-family: "inter";
  max-width: 540px;
  font-size: 1.6rem;
  background-color: #727171;
  font-weight: 500;
`;
