import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 0.5rem;
	height: 280px;
	width: 100%;
	border-radius: 8px;
	border: 1px solid #60a5fa;
	padding: 20px 25px;
	transform: scale(1);
	transition: all 0.5s ease-in-out;

	&:hover {
		transform: scale(1.05);
		transition: all 0.5s ease-in-out;
		box-shadow: 0 3px 32px 0 rgba(0, 0, 0, 0.15);
	}
`;

export const ImgContainer = styled.div`
	width: 70px;
	height: 80px;
`;

export const Title = styled.h2`
	font-weight: 600;
	font-size: 1.1rem;
`;
