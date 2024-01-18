import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
  //*

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
    padding:50px;
    transform-origin: top;
    box-shadow: 2px 4px 4px 0px rgba(0,0,0,0.25);

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
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  border-radius: 25px;
  overflow: hidden;

  mix-blend-mode: luminosity;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 50px;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  border-right: 1px solid rgba(0, 0, 0, 0.7);
  padding-right: 5rem;

  @media (max-width: 750px) {
    padding-right: 0rem;
    padding-bottom: 5rem;
    width: 100%;
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
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: 2.4px;
`;

export const H4 = styled.h2`
  text-align: start;
  font-family: "inter";
  max-width: 540px;
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
