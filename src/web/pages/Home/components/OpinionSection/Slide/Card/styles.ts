import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	border-top: 4px solid #67e8f9;
	background: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1rem !important;
	padding: 1rem;
	padding-bottom: 8rem;
	cursor: default;

	p {
		font-size: 1rem;
	}
`;

export const QuoteContainer = styled.div`
	color: #1e40af;
	width: 100%;
	height: 3rem;

	svg {
		font-size: 3rem;
	}
`;

export const ReviewerStars = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.1rem !important;
	color: #1e40af;
	font-size: 1.4rem;
`;

export const ReviewerProfile = styled.div`
	position: absolute;
	bottom: 5px;
	left: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem !important;

	&:first-child {
		width: 40%;
	}

	span {
		display: flex;
		flex-direction: column;

		h2 {
			margin: 0;
			font-size: 0.9rem;
			font-weight: 600;
		}

		p {
			margin: 0;
			font-size: 0.8rem;
		}
	}
`;
