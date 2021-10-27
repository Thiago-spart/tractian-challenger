import { createGlobalStyle } from "styled-components";

import { normalize } from "styled-normalize";

export const GlobalBaseStyle = createGlobalStyle`
  ${normalize};

  body, #__next {
    position: relative;
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`;
