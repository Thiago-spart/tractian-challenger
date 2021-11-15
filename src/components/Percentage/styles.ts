import styled from "styled-components";

export const Container = styled.section`
	padding: 6rem 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
`;

export const Title = styled.h2`
	font-size: 2.25rem;

	@media (max-width: 1023px) {
		text-align: center;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 1023px) {
		flex-direction: column;
		gap: 2rem;
	}
`;

export const Card = styled.div`
	position: relative;
	width: 348px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	p {
		text-align: center;
		font-size: 1rem;
		font-weight: 600;
	}

	h6 {
		font-size: 3.8rem;
		font-weight: 600;
		margin: 0;
	}

	&:nth-child(2)::before {
		content: "";
		position: absolute;
		top: -6%;
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
