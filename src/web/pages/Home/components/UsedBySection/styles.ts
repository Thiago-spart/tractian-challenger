import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	margin: 3rem auto;
	width: 95%;
	height: 10rem;
	position: relative;
	overflow: hidden;

	@media screen and (min-width: 1023px) {
		width: 80%;
	}

	&::before {
		background: linear-gradient(90deg, #fff 5%, hsla(0, 0%, 100%, 0));
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 1;
		pointer-events: none;
	}

	&::after {
		background: linear-gradient(90deg, #fff 5%, hsla(0, 0%, 100%, 0));
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 1;
		right: 0;
		top: 0;
		transform: rotate(180deg);
		pointer-events: none;
	}
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
	height: 100%;
	gap: 2rem;

	animation: moveSlideshow 60s linear infinite;

	&:hover {
		animation-play-state: paused;
	}

	@keyframes moveSlideshow {
		100% {
			transform: translate3d(calc(-100% + 100vw), 0, 0);
		}
	}

	li {
		box-sizing: border-box;
		width: 20rem;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
