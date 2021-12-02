import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	border-top: 4px solid #67e8f9;
	background: var(--white);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1.5rem !important;
	padding: 1.5rem;
	width: 40rem;
	padding-bottom: 12rem;
	cursor: default;

	p {
		font-size: 1.6rem;
	}
`;

export const QuoteContainer = styled.div`
	color: #1e40af;
	width: 100%;
	height: 4rem;

	svg {
		font-size: 4.5rem;
	}
`;

export const ReviewerStars = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.25rem !important;
	color: #1e40af;
	font-size: 1.8rem;
`;

export const ReviewerProfile = styled.div`
	position: absolute;
	bottom: 5px;
	left: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.5rem !important;

	&:first-child {
		width: 40%;
	}

	span {
		display: flex;
		flex-direction: column;

		h2 {
			font-size: 1.4rem;
			font-weight: 600;
		}

		p {
			margin: 0;
			font-size: 1.2rem;
		}
	}
`;
