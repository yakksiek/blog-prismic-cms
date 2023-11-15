import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    --font-ultra-light: 'GeneralSansExtraLight', sans-serif;
    --font-light: 'GeneralSansMedium', sans-serif;
    --font-extra-bold: 'GeneralSansSemiBold', sans-serif;
  }

  body {
    background-color: #fff;
    font-family: var(--font-ultra-light);
  }

  h1, h2, h4, h5 {
    font-family: var(--font-extra-bold);
  }

  h2 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.75rem;
  }

  a {
    text-decoration: none;
    color: #000
  }

  ul {
    list-style: none;
  }

`;

export default GlobalStyles;
