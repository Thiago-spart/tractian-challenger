import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 0.5rem;

	& > button {
		margin: 1.6rem 0;
	}
`;

export const ImgContainer = styled.div`
	width: fit-content;
	height: auto;
	margin-left: 1rem;
`;

export const SeparatorLine = styled.div`
	width: 100%;
	height: 0.2rem;
	margin: 0.5rem 0;
	background: var(--gray-800);
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
			color: var(--blue-750);
			transition: 0.6s all ease-out;

			&:hover {
				filter: brightness(0.8);
			}
		}
	}
`;
