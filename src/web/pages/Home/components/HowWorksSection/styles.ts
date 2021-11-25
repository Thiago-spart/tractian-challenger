import styled from "styled-components";

export const Container = styled.section`
	background: #fafafa;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1.5rem;
	padding-top: 3.5rem;
`;

export const Title = styled.h2`
	margin: 0;
	font-size: 2.5rem;
`;

export const SubTitle = styled.h3`
	font-size: 1.2rem;
`;

export const Switch = styled.div`
	width: 95%;
	height: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 0.5rem;
`;

export const Button = styled.button<{ dark?: boolean; active: boolean }>`
	width: 50%;
	height: 100%;
	color: ${({ active }) => (active ? "#ffffff" : "#000000")};
	background: ${({ dark, active }) => (dark && active ? "#1c1c1c" : active && "#1e40af")};
	font-size: 1.1rem;
	font-weight: 600;
	border: 1px solid #000000;
	border-radius: 0.5rem 0 0 0.5rem;

	& + button {
		border-left: none;
		border-radius: 0 0.5rem 0.5rem 0;
	}

	transition: all 0.4s ease-in-out;

	&:hover {
		background-color: ${({ active, dark }) =>
			!dark && !active ? "#bfdbfe" : !active && "#94a3b8"};
	}
`;
