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
	text1: css`
		font-weight: 300;
		font-size: auto;
		line-height: auto;

		@media screen and (min-width: 1023px) {
			font-size: 1.8rem;
			line-height: 2.8rem;
		}
	`,
};
