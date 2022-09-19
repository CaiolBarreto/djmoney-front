import { createGlobalStyle } from 'styled-components';
import { themes } from './theme';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${themes.colors.backgroud};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${themes.colors.lightGreen};
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`