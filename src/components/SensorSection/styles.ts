import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	height: 100%;
	margin: 2rem auto;
	padding: 4rem 9rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	background: #fafafa;
`;

export const ContentContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 0.5rem;
`;

export const Title = styled.h3`
	color: #2563eb;
	font-size: 1.1rem;
	font-weight: 600;
`;

export const SubTitle = styled.h2`
	color: #18181b;
	font-size: 2.2rem;
	width: 75%;

	span {
		font-weight: 600;
	}
`;

export const Options = styled.ul`
	font-size: 1.1rem;
	font-weight: 600;
	list-style: none;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1rem;
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
		color: ${({ selected }) => selected && "#2563eb"};
		letter-spacing: 0.1rem;
	}
`;
