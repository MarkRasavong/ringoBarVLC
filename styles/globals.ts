import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, 
  *::after, 
  *::before {
    box-sizing: border-box;
  };

  html, body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
  };

  h1, h2, h3, h4, h5, h6 {
    font-family: "Oleo Script", cursive;
  }

  a {
    color: inherit;
    text-decoration: none;
   }
`

export default GlobalStyles
