import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 0.25rem;

	& > button {
		margin: 1rem 0;
	}
`;

export const ImgContainer = styled.div`
	width: fit-content;
	height: auto;
	margin-left: 10px;
`;

export const SeparatorLine = styled.div`
	width: 100%;
	height: 2px;
	margin: 0.25rem 0;
	background: #b5b5b5;
`;

export const InviteBlock = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p {
		font-weight: 700;

		span {
			color: #1d4ed8;
			transition: 0.6s all ease-out;

			&:hover {
				filter: brightness(0.8);
			}
		}
	}
`;
