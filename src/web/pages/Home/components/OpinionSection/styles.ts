import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	background: linear-gradient(to left, #2663eb, #1f3b8b);
	padding-top: 6rem;
`;

export const Title = styled.h2`
	color: var(--gray-50);
	font-size: 3.6rem;
	letter-spacing: 0.25rem;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	width: 100%;
	padding: 6rem 0 6rem 6rem;
`;

export const CapterraDiv = styled.div`
	width: 35%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	justify-content: center;

	p {
		color: var(--gray-50);
		font-size: 2.4rem;
	}
`;
