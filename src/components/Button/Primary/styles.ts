import styled from "styled-components";

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	color: #ffffff;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	height: 40px;
	width: fit-content;
	background-color: #22c55e;
	transition: 0.8s filter ease-out;

	span {
		margin: auto 10px;
	}

	&:hover {
		filter: opacity(0.8);
	}
`;
