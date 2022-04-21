import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	height: 100%;

	& > img {
		width: 60rem;
		height: 40rem;
		align-self: center;
		object-fit: contain;
	}

	& > button {
		align-self: center;
	}

	@media (min-width: 1023px) {
		width: 50%;
	}
`;

export const Title = styled.h4`
	font-size: 2.4rem;
	line-height: 3.2rem;
	font-weight: 500;
`;

export const Text = styled.p`
	font-size: 1.6rem;
`;
