import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --font-ultra-light: 'GeneralSansExtraLight', sans-serif;
    --font-light: 'GeneralSansMedium', sans-serif;
    --font-regular: 'GeneralSansRegular', sans-serif;
    --font-extra-bold: 'GeneralSansSemiBold', sans-serif;
    --margin-bottom-large: 4rem;
    --margin-bottom: 2rem;
    --margin-bottom-small: 1rem;
    --font-size-button: 1.25rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
  }

  body {
    background-color: #fff;
    font-family: var(--font-ultra-light);
  }

  h1, h2, h4, h5, h6 {
    font-family: var(--font-extra-bold);
    margin-bottom: 1.5rem;
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

  h6 {
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    color: #000
  }

  ul {
    list-style: none;
  }

  .margin-bottom {
    margin-bottom: 2rem;
  }

  .margin-bottom-large {
    margin-bottom: 4rem;
  }

`;

export default GlobalStyles;
