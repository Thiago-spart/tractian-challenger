import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	gap: 3rem;
	margin: 4rem auto;
	padding: 6rem;

	@media (max-width: 1023px) {
		flex-direction: column;
	}
`;

export const Card = styled.div<{ black?: boolean }>`
	display: flex;
	align-items: baseline;
	justify-content: flex-start;
	flex-direction: column;
	border-radius: 0.8rem;
	gap: 2rem;
	background-color: ${({ black }) => (black ? "var(--black)" : "#081e3d")};
	color: var(--white);
	width: 50%;
	height: 100%;
	padding: 2.4rem 2rem;

	a {
		align-self: center;

		button {
			width: 20rem;
		}
	}

	@media (max-width: 1023px) {
		width: 100%;
		gap: 2rem;
	}
`;

export const Title = styled.h2`
	color: var(--white);
	font-size: 2.2rem;
	font-weight: 600;
	margin: 0;
`;

export const SubTitle = styled.p`
	font-size: 1.4rem;
	text-align: center;
`;
