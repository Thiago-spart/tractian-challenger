import styled from "styled-components";

import { SIZES } from "styles/sizes";

export const Container = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: initial;
	gap: 3rem;
	${SIZES.horizontalPadding}
	${SIZES.verticalPadding}
  flex-direction: column;

	@media screen and (min-width: 1023px) {
		flex-direction: row;
	}
`;

export const Card = styled.div<{ black?: boolean }>`
	display: flex;
	align-items: baseline;
	justify-content: flex-start;
	flex-direction: column;
	border-radius: 0.8rem;
	background-color: ${({ black }) => (black ? "var(--black)" : "#081e3d")};
	color: var(--white);
	width: 100%;
	min-height: 100%;
	gap: 2rem;
	padding: 2rem 1.6rem;

	img {
		width: 48rem;
		height: 100%;
		object-fit: contain;
		align-self: center;
	}

	a {
		align-self: center;

		button {
			width: 20rem;
		}
	}

	@media screen and (min-width: 720px) {
		gap: 2.5rem;
		padding: 2.4rem 2rem;
		max-height: 72.1rem;
	}

	@media screen and (min-width: 1023px) {
		width: 50%;
		gap: 3rem;
	}
`;

export const Title = styled.h2`
	color: var(--white);
	font-size: 2.2rem;
	font-weight: 600;
`;

export const SubTitle = styled.p`
	font-size: 2rem;
	line-height: 2.8rem;
	font-weight: 500;
	text-align: center;
`;
