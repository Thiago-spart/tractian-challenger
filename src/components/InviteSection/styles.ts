import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	gap: 2rem;
	align-items: center;
	justify-content: space-between;
	background-color: #fafafa;
	width: 100%;
	height: 100%;
	padding: 4rem;

	@media (max-width: 1023px) {
		flex-direction: column;
	}
`;

export const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: flex-start;
	justify-content: flex-start;
	background-color: #ffffff;
	width: 50%;
	height: 36rem;
	padding: 4rem;
	border-radius: 0.25rem;
	box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);

	@media (max-width: 1023px) {
		width: 100%;
		gap: 2rem;
	}

	h2 {
		font-size: 1.9rem;
		font-weight: 700;
		color: #1e40af;
		margin: 0;
	}

	& > p {
		font-size: 1.2rem;
		color: #52525b;
	}

	& > a {
		color: #1e40af;
		font-weight: 700;
		font-size: 1.1rem;
		transition: all 0.4s ease-in-out;

		p {
			display: flex;
			align-items: center;

			svg {
				margin: 0.45rem;
			}
		}

		&:hover {
			color: #2563eb;
		}
	}
`;

export const BlogList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	gap: 1rem;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: 100%;

	li {
		position: relative;
		width: 100%;
		height: 5rem;
		padding-right: 4rem;
		border-radius: 0.5rem;
		transition: all 0.4s ease-in-out;

		a {
			font-size: 1.2rem;
			color: #52525b;
		}

		&:hover {
			background: #eff6ff;
		}

		&::before {
			position: absolute;
			content: "";
			width: 60%;
			height: 2px;
			background-color: #4c6bc8;
			bottom: 0;
			left: 0;
		}
	}
`;

export const ImgContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 12%;
	width: 400px;
	height: 300px;

	@media (max-width: 1023px) {
		left: 24%;
	}
`;
