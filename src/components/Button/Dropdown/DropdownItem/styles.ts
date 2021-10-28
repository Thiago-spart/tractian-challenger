import styled from "styled-components";

export const Container = styled.div`
	padding: 10px 16px;
	width: 100%;
	height: 100%;
	color: #575757;
	transition: background-color 0.5s;

	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 10px;

	& > svg {
		color: #2563eb;
		font-size: 20px;
	}

	&:hover {
		background-color: rgb(234, 238, 244);
		transition: background-color 0.5s;
	}

	&:first-child:hover {
		border-radius: 8px 8px 0 0;
	}

	&:last-child:hover,
	&:last-child {
		border-radius: 0 0 8px 8px;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 6px;

	p {
		font-size: 13px;
	}
`;
