import styled from "styled-components";

interface ButtonProps {
	noBackground?: boolean;
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
	width: fit-content;
	background-color: ${({ noBackground }) => (noBackground ? "transparent" : "var(--green-600)")};
	transition: 0.8s all ease-out;

	span {
		margin: auto 0.5rem;
	}

	&:hover {
		filter: ${({ noBackground }) => (noBackground ? "none" : "contrast(1.4)")};
		color: ${({ noBackground }) => noBackground && "var(--green-600)"};
	}

	@media (max-width: 1023px) {
		color: ${({ noBackground }) => noBackground && "var(--black)"};
		justify-content: ${({ noBackground }) => noBackground && "flex-start"};
		align-items: ${({ noBackground }) => noBackground && "flex-start"};
	}

	@media (max-width: 768px) {
	}
`;
