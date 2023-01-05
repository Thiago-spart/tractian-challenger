import Image from "next/image";

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

export const Card = styled.div<{ isDark?: boolean }>`
	display: flex;
	align-items: baseline;
	justify-content: flex-start;
	flex-direction: column;
	border-radius: 0.8rem;
	background-color: ${({ isDark }) => (isDark ? "var(--black)" : "#081e3d")};
	color: var(--white);
	width: 100%;
	gap: 2rem;
	padding: 2rem 1.6rem;

	h2 {
		color: var(--white);
		font-size: 2.2rem;
		font-weight: 600;
	}

	p {
		font-size: 2rem;
		line-height: 2.8rem;
		font-weight: 500;
		text-align: center;
	}

	a {
		width: 100%;
		align-self: center;
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

export const ProductBannerImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: contain;

	@media screen and (min-width: 720px) {
		max-height: 36.6rem;
	}
`;

export const CustomImageDivider = styled(Image)`
	width: 48rem;
	height: 100%;
	object-fit: contain;
`;
