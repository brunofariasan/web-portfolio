import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 20rem;
  background: rgba(0, 0, 0, 0.95);
`;

export const Watermark = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const MapSection = styled.div`
  background: #0f141e;
  position: absolute;
  z-index: 0;
  left: 0;
  height: 36rem;
  top: 20rem;
  overflow: hidden;
  right: 43.6rem;
  margin-top: 4.2rem;
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);

  @media (max-width: 1245px) {
    right: 22.7rem;
  }
  @media (max-width: 750px) {
    right: 0rem;
  }
`;

export const Section = styled.div`
  width: 100%;
  padding: 0 35rem;
  position: relative;
  pointer-events: none;
  height: 60rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1245px) {
    padding: 0 14rem;
  }

  @media (max-width: 750px) {
    padding: 0;
  }
`;

export const TextSection = styled.div`
  z-index: 1;
  width: 62rem;
  height: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const I = styled.i``;
