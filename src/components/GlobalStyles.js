import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
    }
    &::-webkit-scrollbar-track {
      background-color: white;
    }
  }
  body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    h2 {
      font-size: 3rem;
      font-family: 'Abril Fatface', cursive;
      font-weight: lighter
    }
    h3 {
      font-size: 1.75rem;
      color: #333;
      padding: 1.5rem 0rem; // 1.5rem top & bottom, 0rem left & right
    }
    h4 {
      font-size: 1.3rem;
      color: #333;
      padding: 1.5rem 0rem; // 1.5rem top & bottom, 0rem left & right
    }
    h5 {
      font-size: 1.2rem;
      font-weight: lighter;
      color: #696969;
      padding: 0rem 0.5rem; // 1.5rem top & bottom, 0rem left & right
    }
    p {
      font-size: 1.2rem;
      line-height: 200%;
      color: #696969
    }
    a {
      text-decoration: none;
      color: #333;
    }
    img {
      display: block; // Stretches img to corners of modal
    }
    input {
      font-weight: bold;
      font-family: 'Monsterrat', sans-serif;
    }
  }
`;

export default GlobalStyles;
