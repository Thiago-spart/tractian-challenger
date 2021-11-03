import styled from "styled-components";

interface ButtonProps {
	noBackground?: boolean;
	allWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	color: #ffffff;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	height: 40px;
	font-weight: 700;
	width: ${({ allWidth }) => (allWidth ? "100%" : "fit-content")};
	background-color: ${({ noBackground }) => (noBackground ? "transparent" : "#1d4ed8")};
	transition: 0.8s all ease-out;

	span {
		margin: auto 10px;
	}

	&:hover {
		filter: ${({ noBackground }) => (noBackground ? "none" : "contrast(0.8)")};
		color: ${({ noBackground }) => noBackground && "#1d4ed8"};
	}
`;
