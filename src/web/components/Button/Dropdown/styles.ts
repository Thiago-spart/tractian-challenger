import styled from "styled-components";

interface Props {
	open: boolean;
	width?: number;
}

export const Container = styled.button<Props>`
	position: relative;

	height: 42px;
	min-width: ${({ width }) => (width ? `${width}px` : "fit-content")};

	border: none;

	display: flex;
	align-items: center;
	gap: 8px;
	justify-content: ${({ width }) => (width ? "center" : "space-between")};
	outline: none;
	cursor: pointer;
	text-align: left;
	margin: 0;
	color: #ffffff;

	background-color: transparent;

	transition: 0.6s;

	&:not(:disabled):hover {
		color: #49dc80;
	}

	& > svg {
		transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(360deg)")};
		transition: transform 0.25s;
	}

	&:disabled {
		background-color: #c1c4ca;
		color: #878787;
		font-weight: 700;
		cursor: auto;
	}

	@media (max-width: 1023px) {
		justify-content: flex-start;
		margin-left: 10px;
		color: #212121;
	}
`;

export const Wrapper = styled.div<Props>`
	position: absolute;
	display: ${({ open }) => (open ? "flex" : "none")};
	left: -160px;
	top: 43.4px;

	flex-direction: column;

	background: #ffffff;
	box-shadow: 0px 2px 20px rgba(44, 74, 125, 0.217548);
	border-radius: 8px;

	min-width: 448px;
	min-height: fit-content;
	overflow-y: none;
	z-index: 3;

	@media (max-width: 1023px) {
		left: -5px;
		top: 43.4px;
	}
`;

export const Title = styled.div`
	font-weight: 600;
`;