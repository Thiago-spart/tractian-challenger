import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	gap: 2rem;
	margin: 2rem auto;
	padding: 4rem 9rem;

	@media (max-width: 1023px) {
		flex-direction: column;
	}
`;

export const Card = styled.div<{ black?: boolean }>`
	display: flex;
	align-items: baseline;
	justify-content: flex-start;
	flex-direction: column;
	border-radius: 0.5rem;
	gap: 1rem;
	background-color: ${({ black }) => (black ? "#1c1c1c" : "#081e3d")};
	color: #ffffff;
	width: 50%;
	height: 44.5rem;
	padding: 1.6rem 1.4rem;

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
	color: #ffffff;
	font-size: 2.2rem;
	font-weight: 600;
	margin: 0;
`;

export const SubTitle = styled.p`
	font-size: 1.4rem;
	text-align: center;
`;
