import styled from "styled-components";

export const Container = styled.section`
	margin: 2.5rem auto;
	width: 100%;
	height: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 2.5rem;
	font-size: 1.6rem;
`;

export const TitleContainer = styled.div`
	align-self: center;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2.5rem;

	p {
		font-weight: 700;
	}
`;

export const SlideStyle = styled.div`
	height: 13rem;
	position: relative;
	overflow: hidden;
	width: 100%;
`;

export const SlideContainer = styled.div`
	position: absolute;
	left: 0;
	height: 100%;
`;

export const Slides = styled.ul`
	display: flex;
	flex: row;
	flex-wrap: no-wrap;
	height: 110%;
	gap: 1.5rem;

	animation: moveSlideshow 50s linear infinite;

	@keyframes moveSlideshow {
		100% {
			transform: translate3d(calc(-100% + 100vw), 0, 0);
		}
	}

	li {
		margin-top: 1rem;
		box-sizing: border-box;
		width: 322px;
		height: 110px;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: rotate(2deg);
		transition: all 0.3s ease-in-out;

		&:nth-child(odd) {
			transform: rotate(-2deg);
		}

		&:hover {
			transform: rotate(0);
		}
	}
`;

export const CirclePulse = styled.div`
	position: relative;
	width: 75px;
	height: 75px;
	border-radius: 50%;
	background: linear-gradient(to left, rgb(38, 99, 235), rgb(31, 59, 139));
	animation: primaryPulse 2s infinite;

	&::after {
		content: "";
		position: absolute;
		left: -18px;
		top: -18px;
		width: 110px;
		height: 110px;
		border-radius: 50%;
		background: linear-gradient(to left, rgba(38, 99, 235, 0.3), rgba(31, 59, 139, 0.3));
		animation: pulse 2s infinite;
	}

	&::before {
		content: "";
		position: absolute;
		left: -27px;
		top: -27px;
		width: 130px;
		height: 130px;
		border-radius: 50%;
		background: linear-gradient(to left, rgba(38, 99, 235, 0.1), rgba(31, 59, 139, 0.1));
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.4);
		}
		50% {
			transform: scale(1);
		}
		100% {
			transform: scale(0.4);
		}
	}

	@keyframes primaryPulse {
		0% {
			transform: scale(0.4);
		}
		50% {
			transform: scale(0.8);
		}
		100% {
			transform: scale(0.4);
		}
	}
`;
