import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  margin: 0rem auto;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
  justify-content: center;
  z-index: 1000;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 6.4rem;
    height: 6.4rem;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 5.1rem;
    height: 5.1rem;
    margin: 0.6rem;
    border: 0.6rem solid #cef;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #cef transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
