import styled from "styled-components";

export const Container = styled.div<{ colorOne: string; colorTwo: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to left, ${({ colorOne, colorTwo }) => `${colorOne}, ${colorTwo}`});
	gap: 2rem;
	transition: all 0.3s ease-in-out;
	width: 322px;
	height: 110px;
	border-radius: 0.8rem;
	font-size: 1.6rem;
	color: var(--white);
	font-weight: 600;

	span {
		display: block;
		width: 50%;
	}
`;

export const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 57px;
	height: 57px;
	border-radius: 50%;
	background: var(--white);
`;
