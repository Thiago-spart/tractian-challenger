import Image from "next/image";

import styled from "styled-components";

import { SIZES } from "styles/sizes";

export const Container = styled.div<{ isDark: boolean }>`
	padding: 3rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	background-color: ${({ isDark }) => (isDark ? "#1c1c1c" : "#224eba")};
	color: ${({ isDark }) => (isDark ? "#51e602" : "#22d3ee")};

	width: 100%;
	height: 100%;

	&:last-child {
		height: 100%;
		width: 100%;
	}

	@media screen and (min-width: 700px) {
		${SIZES.horizontalPadding}
		${SIZES.verticalPadding}
	}

	@media screen and (min-width: 1023px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const DetailList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2rem;

	padding: 0 1.5rem;
	width: 100%;
	margin-top: 2.5rem;

	@media screen and (min-width: 1023px) {
		margin-top: 0;
		width: 48%;
	}
`;

export const DetailItem = styled.li<{ active: boolean; isDark: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;

	padding: 1.5rem;
	width: 100%;
	height: 12rem;

	background-color: ${({ active }) => (active ? "rgba(255, 255, 255, 0.1)" : "transparent")};
	border-radius: 0.8rem;

	transition: 0.2s;

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	h3 {
		color: var(--gray-50);
		color: ${({ isDark, active }) => (isDark && active ? "#51e602" : active && "#22d3ee")};

		font-size: 1.8rem;
		font-weight: 600;
	}

	div:last-child {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 0.25rem;

		p {
			color: var(--gray-50);
			font-weight: 500;
			font-size: 1.4rem;
		}
	}
`;

export const NumberBall = styled.div<{ active: boolean; isDark: boolean }>`
	display: none;
	position: relative;
	border: 1px solid red;
	width: 7rem;
	height: 4rem;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	font-size: 1.6rem;
	background-color: var(--gray-50);
	background-color: ${({ isDark, active }) => (isDark && active ? "#51e602" : active && "#22d3ee")};

	span {
		color: var(--black);
		position: absolute;
		top: 25%;
		left: 43%;
		z-index: 1;
	}

	@media screen and (min-width: 720px) {
		display: flex;
	}

	@media screen and (min-width: 1023px) {
		width: 10rem;
	}
`;

export const ProductImage = styled(Image)`
	object-fit: contain;
`;
