import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 2rem;
	width: 50%;
	height: 100%;

	@media (max-width: 1023px) {
		width: 100%;
	}
`;

export const Title = styled.h4`
	font-size: 2.4rem;
	font-weight: 600;
`;

export const Text = styled.p`
	font-size: 1.6rem;
`;
