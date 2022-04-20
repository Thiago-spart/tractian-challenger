import styled from "styled-components";

import { FONTS } from "styles/fonts";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 0.8rem;
	height: 30rem;
	width: 100%;
	border-radius: 0.8rem;
	border: 1px solid #60a5fa;
	padding: 2rem 2.5rem;
	transform: scale(1);
	transition: all 0.5s ease-in-out;
	cursor: default;

	p {
		${FONTS.text3}
	}

	&:hover {
		transform: scale(1.05);
		transition: all 0.5s ease-in-out;
		box-shadow: 0 0.3rem 3.2rem 0 rgba(0, 0, 0, 0.15);
	}
`;

export const ImgContainer = styled.div`
	width: 7rem;
	height: 8rem;
`;

export const Title = styled.h2`
	${FONTS.title5}
	font-weight: 700;
`;
