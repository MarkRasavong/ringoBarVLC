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
  

  section {
    margin: auto;
    padding: 4em;
  }

main {
  margin-top: 4em;
  flex-grow: 1;
}
  
  html, body {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  };

  body {
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Oleo Script", cursive;
  };

  a {
    color: inherit;
    text-decoration: none;
   }
`

export default GlobalStyles
