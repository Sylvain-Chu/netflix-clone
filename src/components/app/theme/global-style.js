import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100vh;
    width: 100vw;
    font-size: 62.5%;
    margin: 0;
    padding: 0;
    font-family: inherit;
    
    background-color: ${({theme}) => theme.colors.black};
    
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; 
    scrollbar-width: none;
  }


  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', Helvetica, Arial, sans-serif;
  }


  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6em;
  }
  
  input {
    font-family: inherit;
  }

  button {
    border: 0;
    background: transparent;
  }

  a {
    text-decoration: none;
    color: unset;
    margin: 0;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`
