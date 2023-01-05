import styled from "styled-components";

import { FONTS } from "styles/fonts";
import { SIZES } from "styles/sizes";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3.4rem;
	width: 100%;
	height: 100%;
	${SIZES.horizontalPadding}
	${SIZES.verticalPadding}

  h2 {
		${FONTS.title2}

		span {
			font-weight: 600;
		}
	}
`;

export const CardContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 4rem;
	align-items: baseline;

	img {
		align-self: center;
	}

	@media (min-width: 639px) {
		grid-template-columns: repeat(2, 1fr);

		img {
			align-self: flex-start;
		}
	}

	@media (min-width: 1023px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
