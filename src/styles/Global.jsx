import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --font-ultra-light: 'GeneralSansExtraLight', sans-serif;
    --font-regular: 'GeneralSansRegular', sans-serif;
    --font-medium: 'GeneralSansMedium', sans-serif;
    --font-extra-bold: 'GeneralSansSemiBold', sans-serif;
    --margin-large: 4rem;
    --margin-regular: 2rem;
    --margin-small: 1rem;
    --max-width-container-medium: 54rem;
    --font-size-button: 1.25rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  
  }

  body {
    background-color: #fff;
    font-family: var(--font-regular);
  }

  h1, h2, h4, h5, h6 {
    font-family: var(--font-extra-bold);
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 5rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.75rem;
  }

  h6 {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }

  p {
    line-height: 1.7rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer
  }

  /* .margin-bottom {
    margin-bottom: 2rem;
  }

  .margin-bottom-large {
    margin-bottom: 4rem;
  } */

`;

export default GlobalStyles;
