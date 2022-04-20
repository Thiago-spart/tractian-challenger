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
`;

export const Title = styled.h2`
	${FONTS.title2}

	span {
		font-weight: 600;
	}
`;

export const CardContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 4rem;
	align-items: baseline;

	@media (max-width: 1023px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 639px) {
		grid-template-columns: 1fr;
	}
`;
