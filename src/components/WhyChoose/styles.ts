import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 4rem 2rem;
	gap: 2.5rem;
	width: 100%;
	height: 100%;
`;

export const Title = styled.h2`
	font-size: 2.3rem;
	margin: 0;
	span {
		font-weight: 600;
	}
`;

export const CardContainer = styled.div`
	width: 80%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 1.5rem;
	align-items: baseline;
`;
