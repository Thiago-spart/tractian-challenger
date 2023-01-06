import styled from "styled-components";

import { SIZES } from "styles/sizes";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	background: linear-gradient(to left, #2663eb, #1f3b8b);
	${SIZES.verticalPadding}

	h2 {
		color: var(--gray-50);
		font-size: 3rem;
		line-height: 3.6rem;
		letter-spacing: 0.4rem;
		font-weight: 500;
		padding: 0 2rem;
	}

	@media screen and (min-width: 720px) {
		h2 {
			padding: 0;
		}
	}

	@media screen and (min-width: 1023px) {
		padding-left: 3.5rem;
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	width: 100%;
	flex-direction: column-reverse;

	@media screen and (min-width: 720px) {
		flex-direction: row;
	}
`;

export const CapterraDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	justify-content: center;

	p {
		color: var(--gray-50);
		font-size: 2rem;
		line-height: 2.8rem;
		text-align: center;
	}

	img {
		object-fit: contain;
	}

	@media screen and (min-width: 1023px) {
		align-items: flex-start;

		p {
			text-align: left;
			font-size: 2.4rem;
			line-height: 3.2rem;
		}
	}
`;
