import { createGlobalStyle } from "styled-components";

export const GlobalBaseStyle = createGlobalStyle`

  :root {
    --white: #ffffff;
    --gray-200: #d9d9d9;
    --gray-400: #c1c4ca;
    --gray-600: #a1a1aa;
    --gray-800: #878787;
    --black: #010101;
    --light-blue-500: #7ce7f2;
    --blue-300: #2551b5;
    --blue-700: #1d4ed8;
    --blue-750: #1f40af;
    --blue-800: #1e3a8a;
    --green-200: #49dc80;
    --green-600: #22c55e;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
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
		background: #ffffff;

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
    background: #ffffff;
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
