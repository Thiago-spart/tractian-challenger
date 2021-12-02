import styled from "styled-components";

export const Container = styled.section`
	padding: 6rem 4rem;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 6rem;
	padding: 10rem 4rem;

	@media (max-width: 1023px) {
		padding: 10rem 2rem;
	}
`;

export const Title = styled.h2`
	font-size: 3.6rem;
	font-weight: 500;
	width: 65%;
	text-align: center;
`;

export const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 1023px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Card = styled.div`
	position: relative;
	width: calc(3 / 100%);
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding-top: 2rem;

	p {
		text-align: center;
		font-size: 1.6rem;
		font-weight: 0.6rem;
		letter-spacing: 0.25rem;
		font-weight: 500;
	}

	h6 {
		font-size: 6rem;
	}

	&:nth-child(2)::before {
		content: "";
		position: absolute;
		top: -25%;
		left: 20%;
		width: 200px;
		height: 5px;
		background-color: #4e76d9;
		border-radius: 5px 5px 0px 0px;

		@media (max-width: 1023px) {
			display: none;
		}
	}

	& + div {
		border-left: 1px solid #f4f4f5;

		@media (max-width: 1023px) {
			border: none;
		}
	}
`;
