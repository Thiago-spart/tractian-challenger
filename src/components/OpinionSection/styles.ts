import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	background: linear-gradient(to left, #2663eb, #1f3b8b);
	padding-top: 4rem;
`;

export const Title = styled.h2`
	margin: 0;
	color: #fafafa;
	font-size: 2.3rem;
	letter-spacing: 0.15rem;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	width: 100%;
	padding: 4rem 0 4rem 4rem;
`;

export const CapterraDiv = styled.div`
	width: 35%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1.5rem;
	justify-content: center;

	p {
		color: #fafafa;
		font-size: 1.5rem;
	}

	button {
		width: 11.8rem;
	}
`;
