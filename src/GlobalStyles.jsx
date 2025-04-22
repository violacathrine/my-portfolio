import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #fff; /* eller din bakgrund */
    color: #000;
    font-family: 'Hind', sans-serif;
  }

  /* Alla rubriker får Montserrat */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin: 0 0 1rem;
  }

  /* Alla paragraf-taggar får Hind */
  p {
    font-family: 'Hind', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    margin: 0 0 1rem;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
`;
