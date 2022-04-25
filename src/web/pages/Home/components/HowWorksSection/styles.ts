import styled from "styled-components";

import { FONTS } from "styles/fonts";

export const Container = styled.section`
	background: var(--gray-50);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2.5rem;
	padding-top: 3rem;

	@media screen and (min-width: 360px) {
		padding-top: 3.5rem;
	}

	@media screen and (min-width: 720px) {
		padding-top: 4rem;
	}

	@media screen and (min-width: 1200px) {
		padding-top: 6rem;
	}
`;

export const Title = styled.h2`
	${FONTS.title2}
`;

export const SubTitle = styled.h3`
	font-size: 1.8rem;
	line-height: 2.8rem;
	font-weight: 500;
	text-align: center;
	margin-right: 2rem;
	margin-left: 2rem;

	@media screen and (min-width: 360px) {
		margin-left: 3rem;
		margin-right: 3rem;
	}

	@media screen and (min-width: 720px) {
		margin-left: 3.5rem;
		margin-right: 3.5rem;
	}
`;

export const Switch = styled.div`
	width: 98%;
	height: clamp(6rem, 2vw, 8rem);
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 0.8rem;

	padding-right: 2rem;
	padding-left: 2rem;

	@media screen and (min-width: 360px) {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	@media screen and (min-width: 720px) {
		height: 4rem;
		padding-left: 3.5rem;
		padding-right: 3.5rem;
	}
`;

export const Button = styled.button<{ dark?: boolean; active: boolean }>`
	width: 50%;
	height: 100%;
	color: ${({ active }) => (active ? "var(--white)" : "var(--black)")};
	background: ${({ dark, active }) =>
		dark && active ? "var(--black)" : active && "var(--blue-750)"};
	font-size: 1.8rem;
	font-weight: 600;
	border: 1px solid var(--black);
	border-radius: 0.8rem 0 0 0.8rem;

	& + button {
		border-left: none;
		border-radius: 0 0.8rem 0.8rem 0;
	}

	transition: all 0.4s ease-in-out;

	&:hover {
		background-color: ${({ active, dark }) =>
			!dark && !active ? "#bfdbfe" : !active && "#94a3b8"};
	}
`;
