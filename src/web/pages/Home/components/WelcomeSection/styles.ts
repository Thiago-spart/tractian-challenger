import styled from "styled-components";

import { SIZES } from "styles/sizes";

export const Container = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 11rem;
	padding-bottom: 11rem;
	font-size: 1.6rem;
	background: linear-gradient(to left, #2663eb, #1f3b8b);
	position: relative;
	${SIZES.horizontalPadding}

	@media (max-width: 1023px) {
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
	}
`;

export const ContentContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2rem;
	color: var(--white);

	@media (max-width: 1023px) {
		width: 95%;
	}

	h1 {
		color: var(--white);
		font-size: 3.6rem;
		font-weight: 600;
	}

	h4 {
		color: var(--white);
		font-size: 1.8rem;
		font-weight: 400;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 0.8rem;
	}

	a {
		font-weight: 600;
		font-size: 1.6rem;
		color: var(--white);
		transition: all 0.4s ease-out;

		&:hover {
			filter: brightness(0.8);
		}
	}
`;

export const GifContainer = styled.div`
	height: 31.2rem;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 100%;
	}

	@media (max-width: 1023px) {
		width: 80%;
	}
`;

export const WaveContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;

	.waves {
		position: relative;
		width: 100%;
		height: 15vh;
		margin-bottom: -7px; /*Fix for safari gap*/
		min-height: 100px;
		max-height: 150px;
	}

	.content {
		position: relative;
		height: 20vh;
		text-align: center;
		background-color: white;
	}

	/* Animation */

	.parallax > use {
		animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
	}

	.parallax > use:nth-child(1) {
		animation-delay: -2s;
		animation-duration: 7s;
	}

	.parallax > use:nth-child(2) {
		animation-delay: -3s;
		animation-duration: 10s;
	}

	.parallax > use:nth-child(3) {
		animation-delay: -4s;
		animation-duration: 13s;
	}

	.parallax > use:nth-child(4) {
		animation-delay: -5s;
		animation-duration: 20s;
	}

	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}

		100% {
			transform: translate3d(85px, 0, 0);
		}
	}

	/*Shrinking for mobile*/
	@media (max-width: 768px) {
		.waves {
			height: 40px;
			min-height: 40px;
		}

		.content {
			height: 30vh;
		}

		h1 {
			font-size: 24px;
		}
	}
`;
