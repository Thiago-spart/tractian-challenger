import styled from "styled-components";

export const SwitchButton = styled.div<{ isOpen: boolean }>`
	position: relative;
	border: none;
	border-radius: 8px;
	height: 3rem;
	width: 7rem;
	font-size: 1.6rem;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--blue-300);
	color: var(--white);

	@media (max-width: 1023px) {
		background: transparent;
		color: var(--black);
	}

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
	border: 1px solid var(--black);
`;

export const SwitchOption = styled.button`
	width: 70px;
	height: 30px;
	border: none;
	background-color: var(--white);
	color: var(--black);

	transition: all 0.5s ease-out;

	&:hover {
		background-color: rgb(234, 238, 244);
	}
`;
