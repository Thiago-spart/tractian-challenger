import { createGlobalStyle } from "styled-components";

import { COLORS } from "styles/colors";

export const GlobalBaseStyle = createGlobalStyle`

  :root {
    ${COLORS.root}
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    line-height: calc(1em + 0.5rem);
  }

  html, body {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body, #__next {
    -webkit-font-smoothing: antialiased;
    background: var(--white);
    font-family: "Poppins", Arial, Helvetica, sans-serif;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
    background: transparent;
    border: transparent;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  #root, #__next {
    isolation: isolate;
  }


  @media (max-width: 768px) {
    html {
      font-size: 57.5%;
    }
  }

  @media (max-width: 320px) {
    html {
      font-size: 55.5%;
    }
  }

  @media (max-width: 280px) {
    html {
      font-size: 52.5%;
    }
  }

  .react-modal-overlay {
    z-index: 2;
		background: var(--white);

		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		top: 0;

		display: flex;
		align-items: center;
		justify-content: center;
    flex-direction: column;
	}

	.react-modal-content {
		width: 100%;
    height: 100%;
    background: var(--white);
		padding: 1rem;
		position: relative;
		border-radius: 0.25rem;
	}

	.react-modal-close {
    position: absolute;
		right: 1.5rem;
		top: 1.5rem;
		height: 25px;
    width: 25px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
		background: transparent;
		transition: filter 0.6s;

    &:hover {
			filter: brightness(0.8);
		}
	}
`;
