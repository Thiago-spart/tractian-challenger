import styled from "styled-components";

import type { ButtonStyleProps } from "./types";

const themeVariations: Record<ButtonStyleProps["schema"], string> = {
	primary: `
		background-color: var(--green-600);
	`,
	secondary: `
		background-color: var(--blue-700);
	`,
};

export const ButtonStyle = styled.button<ButtonStyleProps>`
	${({ schema }) => (schema ? themeVariations[schema] : themeVariations.primary)}

	color: var(--white);
	padding: 1.1rem ${({ isFullWidth }) => (isFullWidth ? "0" : "0.5rem")};
	font-weight: 600;
	font-size: 1.6rem;

	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({ isFullWidth }) => isFullWidth && "100%"};
	border-radius: 0.8rem;
	text-align: center;

	cursor: pointer;
	transition: 0.2s;

	&:hover:not(:disabled) {
		filter: brightness(0.8);
	}

	&:disabled {
		cursor: default;
		filter: grayscale(100%);
	}
`;
