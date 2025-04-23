import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #fff;
    color: #000;
    font-family: 'Hind', sans-serif;
  }


  h1, h2, h3 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    margin: 0 0 1rem;
  }


  p {
    font-family: 'Hind', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    margin: 0 0 1rem;
  }

  a {
    color: inherit;
    text-decoration: underline;
    font-family: "Montserrat",
  }
`;
