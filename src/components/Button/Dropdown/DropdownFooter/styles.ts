import styled from "styled-components";

export const Container = styled.div`
	padding: 8px 16px;
	width: 100%;
	height: 100%;
	color: #575757;
	transition: background-color 0.5s;

	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 10px;

	svg {
		margin-right: 10px;
	}

	p {
		margin-bottom: 0;
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
