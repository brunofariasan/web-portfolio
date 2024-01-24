import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
  justify-content: flex-start;
  padding-top: 27rem;

  @media (max-width: 750px) {
    padding-bottom: 0rem;
    padding-top: 16rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    top: -25%;
    height: 500px;
    max-height: 100%;
    width: 100rem;
    max-width: 100%;
    border-radius: 2.5rem;
    padding: 5rem;
    transform-origin: top;
    box-shadow: 0.2rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);

    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 750px) {
      padding: 4rem 3rem 3rem 3rem;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  margin-top: 5rem;
  gap: 5rem;
  min-height: 15rem;
  justify-content: flex-end;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 0rem;
    margin-top: 1.5rem;
  }
`;

export const FlexSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  @media (max-width: 750px) {
    gap: 3rem;
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

export const ImageContainer = styled.div`
  position: relative;
  width: 60%;
  border-radius: 2.5rem;
  overflow: hidden;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  opacity: 0.5;
  @media (max-width: 750px) {
    margin-top: 3rem;
  }
`;
