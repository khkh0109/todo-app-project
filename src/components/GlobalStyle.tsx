import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
    max-width: 576px;
    margin: 0 auto;
  }
  
  a {
    color: inherit;
    text-decoration: none;
}

  button,
  input,
  textarea {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  button:focus,
  button:active,
  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    outline: none;
    box-shadow: none;
  }

  ul,
  ol,
  li {
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;
  }
`;

export default GlobalStyle;
