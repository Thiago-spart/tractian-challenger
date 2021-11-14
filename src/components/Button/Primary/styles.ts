import styled from "styled-components";

interface ButtonProps {
	noBackground?: boolean;
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
	font-size: 1rem;
	width: fit-content;
	background-color: ${({ noBackground }) => (noBackground ? "transparent" : "#22c55e")};
	transition: 0.8s all ease-out;

	span {
		margin: auto 10px;
	}

	&:hover {
		filter: ${({ noBackground }) => (noBackground ? "none" : "contrast(0.8)")};
		color: ${({ noBackground }) => noBackground && "#22c55e"};
	}

	@media (max-width: 1023px) {
		color: ${({ noBackground }) => noBackground && "#212121"};
		justify-content: ${({ noBackground }) => noBackground && "flex-start"};
		align-items: ${({ noBackground }) => noBackground && "flex-start"};
	}
`;
