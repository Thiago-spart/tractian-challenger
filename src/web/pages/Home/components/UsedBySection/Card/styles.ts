import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;

	filter: grayscale(100%);
	transition: 0.2s;

	img {
		width: 15rem;
	}

	&:hover {
		filter: none;
	}
`;
