import styled from "styled-components";

export const Container = styled.header`
	position: fixed;
	padding: 0.7rem;
	left: 0;
	top: 0;
	width: 100%;
	background-color: #1e3a8a;
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 1023px) {
		z-index: 1;

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
	color: #a1a1aa;
	background: #ffffff;
	height: 25px;
	width: 30px;
	border-radius: 8px;
	border: none;

	transition: 0.6s all ease-out;

	&:hover {
		filter: brightness(0.8);
	}
`;

export const ImgContainer = styled.div`
	width: 100%;
	height: 100%;
	width: 9rem;
	transition: 0.6s filter ease-out;

	&:hover {
		filter: brightness(0.8);
	}
`;
