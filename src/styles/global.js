import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  body {
    overflow: auto;
    -webkit-font-smoothing: antialiased;
    background: #E8E8E8;
  }
  a {
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
  }
`;
