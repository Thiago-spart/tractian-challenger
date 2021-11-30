import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	height: 100%;
	margin: 4rem auto;
	padding: 6rem 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	background: var(--gray-50);

	@media (max-width: 1023px) {
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
	}
`;

export const ContentContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1.5rem;

	& > button {
		margin-top: 2rem;
	}

	@media (max-width: 1023px) {
		width: 100%;
	}
`;

export const Title = styled.h3`
	color: var(--blue-700);
	font-size: 1.8rem;
	font-weight: 600;
`;

export const SubTitle = styled.h2`
	color: var(--black);
	font-size: 3.6rem;
	font-weight: 500;
	width: 75%;

	span {
		font-weight: 600;
	}
`;

export const Options = styled.ul`
	font-size: 2rem;
	font-weight: 600;
	list-style: none;
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
