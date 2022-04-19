import { css } from "styled-components";

export const FONTS = {
	title: css`
		line-height: calc(2.5rem + 4vw);
		font-size: calc(2.5rem + 2vw);
		font-weight: normal;

		@media screen and (min-width: 400px) {
			line-height: calc(2rem + 8vw);
			font-size: calc(2rem + 6vw);
		}

		@media screen and (min-width: 1250px) {
			font-size: 6.2rem;
			line-height: 8.3rem;
		}
	`,
	title2: css`
		font-weight: 400;
		line-height: 4rem;
		font-size: 3rem;

		@media screen and (min-width: 601px) {
			font-size: 3.8rem;
			line-height: 5.3rem;
		}
	`,
	title3: css`
		font-weight: 400;
		line-height: clamp(3.5rem, 5vw, 6rem);
		font-size: clamp(2.5rem, 5vw, 5rem);

		@media screen and (min-width: 601px) {
			font-size: 3.7rem;
			line-height: 5.3rem;
		}
	`,
	text: css`
		font-size: 2.2rem;
		line-height: 3.2rem;
		font-weight: 400;
	`,
	text2: css`
		font-size: clamp(1.8rem, 5vw, 2.2rem);
		line-height: clamp(3rem, 5vw, 3.5rem);
		font-weight: 400;
	`,
};
