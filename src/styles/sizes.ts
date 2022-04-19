import { css } from "styled-components";

export const SIZES = {
	pageMaxWidth: "112.8rem",
	verticalPadding: css`
		padding-bottom: 3rem;
		padding-top: 3rem;

		@media screen and (min-width: 360px) {
			padding-bottom: 3.5rem;
			padding-top: 3.5rem;
		}

		@media screen and (min-width: 720px) {
			padding-bottom: 4rem;
			padding-top: 4rem;
		}

		@media screen and (min-width: 1200px) {
			padding-bottom: 6rem;
			padding-top: 6rem;
		}
	`,
	horizontalPadding: css`
		padding-left: 2rem;
		padding-right: 2rem;

		@media screen and (min-width: 360px) {
			padding-left: 3rem;
			padding-right: 3rem;
		}

		@media screen and (min-width: 720px) {
			padding-left: 3.5rem;
			padding-right: 3.5rem;
		}
	`,
};
