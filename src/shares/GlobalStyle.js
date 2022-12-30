import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html, #root {
    height: 100%;
  }

  body{
    height: 100%;
    
    overflow: hidden;
  }

  ::-webkit-scrollbar {
  display: block;
  width: 0.6rem;
  height: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #9a9896;
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    cursor: pointer ;
    background: #7a7a7a;
  }
  ::-webkit-scrollbar-track {
    background: #e0e0e0;
    border-radius: 1rem;
    margin: 0.5rem 1rem;
  }
`;

export default GlobalStyle;
