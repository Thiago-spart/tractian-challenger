import { css } from "styled-components";

export const FONTS = {
	title1: css`
		font-weight: 600;
		font-size: 2rem;
		line-height: 2.8rem;

		@media screen and (min-width: 1023px) {
			font-size: 3.6rem;
			line-height: 4rem;
		}
	`,
	title2: css`
		font-weight: 400;
		font-size: 3rem;
		line-height: 3.6rem;

		@media screen and (min-width: 640px) {
			line-height: 4rem;
			font-size: 3.6rem;
		}
	`,
	title5: css`
		font-size: 1.8rem;
		line-height: 2.8rem;
	`,
	text1: css`
		font-weight: 300;
		font-size: auto;
		line-height: auto;

		@media screen and (min-width: 1023px) {
			font-size: 1.8rem;
			line-height: 2.8rem;
		}
	`,
	text3: css`
		font-weight: 300;
		font-size: 1.4rem;
		line-height: 2rem;
	`,
};
