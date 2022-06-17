import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, 
  *::after, 
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
  };

  main {
    padding-top: 4em;
  };
  
  html, body {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  };

  h1, h2, h3, h4, h5, h6 {
    font-family: "Oleo Script", cursive;
  };

  a {
    color: inherit;
    text-decoration: none;
   }
`

export default GlobalStyles
