import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	filter: grayscale(100%);
	transition: all 0.4s ease-in-out;
	height: 100%;

	&:hover {
		filter: none;
	}
`;
