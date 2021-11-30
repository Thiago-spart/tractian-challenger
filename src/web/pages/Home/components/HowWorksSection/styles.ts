import styled from "styled-components";

export const Container = styled.section`
	background: var(--gray-50);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2.5rem;
	padding-top: 5rem;
`;

export const Title = styled.h2`
	font-size: 3.6rem;
`;

export const SubTitle = styled.h3`
	font-size: 1.8rem;
`;

export const Switch = styled.div`
	width: 98%;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 0.8rem;
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
