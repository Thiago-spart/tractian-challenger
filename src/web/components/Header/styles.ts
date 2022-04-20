import styled from "styled-components";

import { SIZES } from "styles/sizes";

export const Container = styled.header<{ scroll: boolean }>`
	position: absolute;
	padding-top: 0.7rem;
	padding-bottom: 0.7rem;
	${SIZES.horizontalPadding}
	width: 100%;
	background-color: ${({ scroll }) => (scroll ? "var(--blue-800)" : "transparent")};
	z-index: 5;
	color: var(--white);
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.6rem;
	z-index: 2;

	@media screen and (min-width: 720px) {
		position: fixed;
	}

	button {
		font-size: 1.6rem;
	}

	@media screen and (max-width: 1023px) {
		& > button,
		& > nav {
			display: none;
		}

		div {
			display: flex;
		}
	}
`;

export const MobileMenu = styled.div`
	display: none;
	align-items: center;
	justify-content: center;
	color: var(--gray-600);
	background: var(--white);
	height: 2.5rem;
	width: 3rem;
	border-radius: 0.8rem;
	border: none;

	transition: 0.4s all ease-out;

	&:hover {
		filter: brightness(0.8);
	}
`;

export const ImgContainer = styled.div`
	width: 100%;
	height: 100%;
	width: 10rem;
	transition: 0.4s filter ease-out;

	&:hover {
		filter: brightness(0.8);
	}
`;
