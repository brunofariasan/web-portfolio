import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Zen Dots', sans-serif;
    border: 0;
    font: inherit;
    background-color: #ffffff;
    vertical-align: baseline;
  }

  html {
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;

    p {
      margin: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  p, 
  span {
    font-family: 'Zen Dots', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
