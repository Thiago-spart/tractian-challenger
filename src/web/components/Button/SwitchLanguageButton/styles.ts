import styled from "styled-components";

export const SwitchButton = styled.div<{ isOpen: boolean }>`
	position: relative;
	border: none;
	border-radius: 8px;
	height: 30px;
	width: 70px;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #2551b5;
	color: #ffffff;

	& > svg {
		transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(360deg)")};
		transition: transform 0.25s;
	}
`;

export const SwitchContainer = styled.div<{ isOpen: boolean }>`
	position: absolute;
	bottom: -62px;
	left: 0%;
	display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
	flex-direction: column;
	align-items: flex-start;
	border: 1px solid #010101;
`;

export const SwitchOption = styled.button`
	width: 70px;
	height: 30px;
	border: none;
	background-color: #ffffff;
	color: #010101;

	transition: all 0.5s ease-out;

	&:hover {
		background-color: rgb(234, 238, 244);
	}
`;
