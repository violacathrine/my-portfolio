import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }


  html, body {
    margin: 0;
    padding: 0;
    color: #2b2b2b;
    background: #f7e7ce;
  }


  h1, h2, h3 {
    font-family: Montserrat;
    margin: 0 0 16px;
    font-size: 27px;
  }


  p {
    font-family: Hind;
    font-weight: 400;
    line-height: 1.6;
    margin: 0 0 16px;
  }

  li {
  font-family: Hind;
  }

  a {
    color: inherit;
    font-family: Hind;
    text-decoration: none;
  }
`;
