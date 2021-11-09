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
