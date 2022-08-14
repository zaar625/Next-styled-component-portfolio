import  { createGlobalStyle, css } from "styled-components";


const handleColorType = color => {
  switch (color) {
    case "theme-color-yellow":
      return "#FAC70F";
    case "theme-color-green":
      return "#1AB395";
    case "theme-color-pink":
      return "#F68657";
    case "theme-color-apricot":
      return "#F68657";
    default:
      return "#FAC70F";
  }
};


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
    overflow-x: hidden;
    background-color: ${props => props.themeReducer.mode === 'theme-mode-dark' ? "#000" : "#FFF"};
    color:${props => props.themeReducer.mode === 'theme-mode-dark' ? "#FFF" : "#000"};
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
  }
  
  :root {
    // 기본설정
    --main-bg:${props => props.themeReducer.mode === 'theme-mode-dark' ? "#000" : "#FFF"};
    --second-bg: ${props => props.themeReducer.mode === 'theme-mode-dark' ? "#212121" : "#EFEEE9"};;
    --txt-color:${props => props.themeReducer.mode === 'theme-mode-dark' ? "#FFF" : "#000"};;
    --main-color : ${props => handleColorType(props.themeReducer.color)};
    --box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    --box-shadow-light: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export const CardStyle = css`
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--second-bg);
  color: var(--txt-color);
`
export default GlobalStyle;