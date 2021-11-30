import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 4rem auto;
	gap: 3.4rem;
	width: 100%;
	height: 100%;
`;

export const Title = styled.h2`
	font-size: 3.6rem;
	font-weight: 500;
	span {
		font-weight: 600;
	}
`;

export const CardContainer = styled.div`
	width: 90%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1.5rem;
	align-items: baseline;

	@media (max-width: 1023px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 639px) {
		grid-template-columns: 1fr;
	}
`;
