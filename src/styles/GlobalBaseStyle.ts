import { createGlobalStyle } from "styled-components";

import { normalize } from "styled-normalize";

export const GlobalBaseStyle = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, #__next {
    position: relative;
    min-height: 100%;
    font-family: 'Poppins', sans-serif;
  }
`;
