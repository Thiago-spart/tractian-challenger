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
	color: var(--white);
	border: none;
	border-radius: 0.8rem;
	cursor: pointer;
	height: 3.4rem;
	font-weight: 600;
	font-size: 1.6rem;
	width: ${({ allWidth }) => (allWidth ? "100%" : "fit-content")};
	background-color: ${({ noBackground }) => (noBackground ? "transparent" : "var(--blue-700)")};
	transition: 0.8s all ease-out;

	span {
		margin: auto 0.5rem;
	}

	&:hover {
		filter: ${({ noBackground }) => (noBackground ? "none" : "contrast(0.8)")};
		color: ${({ noBackground }) => noBackground && "var(--blue-700)"};
	}
`;
