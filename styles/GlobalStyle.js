import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
//초기화
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    overflow-x: hidden;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-display: swap;
    // font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    background-color: #000;
    color:white
  }

  a {
    text-decoration: none;
    color: unset;
  }

  ul,
  li {
    list-style-type: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: 0;
    color:white;
  }
  
  :root {
    // 기본설정
    --main-bg:#000;
    --main-bg-light: #fff;
    --second-bg: #212121;
    --txt-color: #fff;
    --main-color:#FAC70F;
    --box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    // 라이트설정
    --main-bg-light: #fff;
    --second-bg-light: #EFEEE9;
    --txt-color-light: #000;
    --box-shadow-light: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    //메인테마컬러 설정
    --main-color-apricot: #F6B352;
    --main-color-yellow: #FAC70F;
    --main-color-green: #1AB395;
    --main-color-pink: #F68657;
  }
`;
export default GlobalStyle;