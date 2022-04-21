import styled from "styled-components";

import { FONTS } from "styles/fonts";
import { SIZES } from "styles/sizes";

export const Container = styled.section`
	width: 100%;
	height: 100%;
	${SIZES.verticalPadding}
	${SIZES.horizontalPadding}

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	background: var(--gray-50);

	@media screen and (min-width: 1023px) {
		flex-direction: row;
		justify-content: space-between;
		gap: 1rem;
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1.5rem;
	width: 100%;

	& > button {
		margin-top: 2rem;
		align-self: center;
	}

	@media screen and (min-width: 1023px) {
		width: 50%;
	}
`;

export const Title = styled.h3`
	color: var(--blue-700);
	${FONTS.title5}
	font-weight: 600;
`;

export const SubTitle = styled.h2`
	color: var(--black);
	line-height: 4rem;
	font-size: 3.6rem;
	font-weight: 500;

	span {
		font-weight: 600;
	}
`;

export const Options = styled.ul`
	font-weight: 600;
	list-style: none;
	font-size: 2rem;
	line-height: 2.8rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2rem;
`;

export const Option = styled.li<{ selected: boolean }>`
	opacity: ${({ selected }) => (selected ? "none" : "0.5")};
	transition: all 0.4s ease-in-out;
	width: 100%;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}

	span {
		color: ${({ selected }) => selected && "var(--blue-700)"};
		letter-spacing: 0.1rem;
	}
`;
