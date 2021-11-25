import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	margin: 2rem auto;
	width: 80%;
	height: 8rem;
	position: relative;
	overflow: hidden;

	&::before {
		background: linear-gradient(90deg, #fff 5%, hsla(0, 0%, 100%, 0));
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}

	&::after {
		background: linear-gradient(90deg, #fff 5%, hsla(0, 0%, 100%, 0));
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
		right: 0;
		top: 0;
		transform: rotate(180deg);
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
		width: 200px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
