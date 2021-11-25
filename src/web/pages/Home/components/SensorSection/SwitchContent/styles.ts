import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;
	width: 50%;
	height: 30rem;

	@media (max-width: 1023px) {
		width: 100%;
	}
`;

export const Title = styled.h4`
	font-size: 1.5rem;
	font-weight: 600;
	margin: 0;
`;

export const Text = styled.p`
	font-size: 1rem;
`;
