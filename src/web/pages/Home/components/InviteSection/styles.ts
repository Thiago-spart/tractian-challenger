import Image from "next/image";

import styled from "styled-components";

import { SIZES } from "styles/sizes";

export const Container = styled.section`
	${SIZES.horizontalPadding}
	${SIZES.verticalPadding}

	display: flex;
	gap: 2.5rem;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	background-color: var(--gray-50);

	width: 100%;
	height: 100%;

	@media (min-width: 1023px) {
		flex-direction: row;
	}
`;

export const Card = styled.div`
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2.5rem;

	background-color: #ffffff;

	width: 100%;
	height: 55rem;
	padding: 4rem;
	padding-bottom: 0;

	border-radius: 0.8rem;
	box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);

	@media (min-width: 1023px) {
		width: 50%;
	}

	h2 {
		font-size: 2.4rem;
		line-height: 3.2rem;
		font-weight: 600;
		color: #1e40af;

		@media (min-width: 640px) {
			line-height: 4rem;
			font-size: 3rem;
		}
	}

	& > p {
		font-size: 1.8rem;
		line-height: 2.8rem;
		color: #52525b;
	}

	& > a {
		color: #1e40af;
		font-weight: 600;
		font-size: 1.8rem;
		transition: all 0.4s ease-in-out;
		display: flex;
		align-items: center;

		margin-bottom: 2rem;

		svg {
			margin: 0.45rem;
		}

		&:hover {
			color: #2563eb;
		}
	}
`;

export const BlogList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	gap: 1.5rem;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: 100%;

	li {
		position: relative;
		width: 100%;
		height: clamp(8rem, 2vw, 6vw);
		border-radius: 0.8rem;
		transition: all 0.4s ease-in-out;
		cursor: pointer;

		a {
			font-size: 1.8rem;
			line-height: 2.8rem;
			color: #52525b;
		}

		&:hover {
			background: #eff6ff;
		}

		&::before {
			position: absolute;
			content: "";
			width: 100%;
			height: 2px;
			background-color: #4c6bc8;
			bottom: 0;
			left: 0;
		}
	}
`;

export const ImgContainer = styled(Image)`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);

	object-fit: contain;

	display: none;

	width: 400px;
	height: 300px;

	@media (min-width: 420px) {
		display: block;
	}
`;
