import styled from "styled-components";

import { SIZES } from "styles/sizes";

export const Container = styled.section`
	display: flex;
	gap: 2.5rem;
	align-items: center;
	justify-content: space-between;
	background-color: var(--gray-50);
	width: 100%;
	height: 100%;
	${SIZES.horizontalPadding}
	${SIZES.verticalPadding}

	@media (max-width: 1023px) {
		flex-direction: column;
	}
`;

export const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	align-items: flex-start;
	justify-content: flex-start;
	background-color: #ffffff;
	width: 50%;
	height: 55rem;
	padding: 4rem;
	border-radius: 0.8rem;
	box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);

	@media (max-width: 1023px) {
		width: 100%;
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

		p {
			display: flex;
			align-items: center;

			svg {
				margin: 0.45rem;
			}
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
		height: 50%;
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

export const ImgContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 12%;
	width: 400px;
	height: 300px;
	@media (max-width: 1023px) {
		left: 24%;
	}

	@media (max-width: 768px) {
		left: 24%;
		bottom: 9.8%;
		width: 300px;
		height: 175px;
	}

	@media (max-width: 400px) {
		display: none;
	}
`;
