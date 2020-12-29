import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    min-width: 28rem;
    font-family: 'Inter', sans-serif;
    font-size: 1.8rem;
    background: black;
  }
`;

export default GlobalStyle;
