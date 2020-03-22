import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  h1, h2, h3, h4, p {
    margin-top: 0;
    margin-bottom: 0;
  }

  input {
    border-radius: 0;
  }

  button, input {
    -webkit-appearance: none;
  }

  button:focus {
    outline: none;
  }
`
