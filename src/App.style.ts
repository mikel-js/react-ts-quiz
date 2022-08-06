import { createGlobalStyle } from 'styled-components';
import backGroundImage from './images/games.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }

  body {
    background-image: url(${backGroundImage})
  }
`;
