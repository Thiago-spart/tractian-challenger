import styled from "styled-components";

import { SIZES } from "styles/sizes";

export const Container = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 3rem;
	padding: 10rem 4rem;
	${SIZES.horizontalPadding}
	${SIZES.verticalPadding}

  h2 {
		font-size: 3rem;
		line-height: 3.6rem;
		font-weight: 500;
		letter-spacing: 0.04rem;
		text-align: center;
		position: relative;
	}

	@media (min-width: 1023px) {
		gap: 6rem;
	}
`;

export const GridContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
`;

export const Card = styled.div`
	position: relative;
	width: calc(3 / 80%);
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding-top: 2rem;

	p {
		text-align: center;
		line-height: 2rem;
		font-size: 1.4rem;
		letter-spacing: 0.25rem;
		font-weight: 500;

		@media screen and (min-width: 1023px) {
			font-size: 1.6rem;
			line-height: 2.4rem;
		}
	}

	h6 {
		font-size: 3.6rem;
		line-height: 4rem;
		font-weight: 700;

		@media screen and (min-width: 1023px) {
			font-size: 4.8rem;
		}
	}

	& + div {
		border: none;

		@media (min-width: 1023px) {
			border-left: 1px solid #f4f4f5;
		}
	}
`;
