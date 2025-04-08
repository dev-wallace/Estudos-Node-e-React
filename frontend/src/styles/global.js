import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }

`;

export default GlobalStyle;
