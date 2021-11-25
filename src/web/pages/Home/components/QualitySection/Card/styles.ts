import styled from "styled-components";

export const Container = styled.div<{ colorOne: string; colorTwo: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to left, ${({ colorOne, colorTwo }) => `${colorOne}, ${colorTwo}`});
	gap: 1.5rem;
	transition: all 0.3s ease-in-out;
	width: 322px;
	height: 110px;
	border-radius: 0.8rem;
	/* box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); */
	font-size: 1rem;
	color: #ffffff;
	font-weight: 600;

	span {
		display: block;
		width: 45%;
	}
`;

export const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 57px;
	height: 57px;
	border-radius: 50%;
	background: #ffffff;
`;
