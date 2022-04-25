import styled from "styled-components";

import { SIZES } from "styles/sizes";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2.5rem;
	flex-direction: column;
	background-color: var(--white);
	font-size: 1.6rem;

	${SIZES.horizontalPadding}
	${SIZES.verticalPadding}

	p {
		color: #52525b;
	}
`;

export const Title = styled.h2`
	font-size: 3rem;
	line-height: 3.6rem;
	font-weight: 500;

	@media screen and (min-width: 640px) {
		font-size: 3.6rem;
		line-height: 4rem;
	}
`;

export const FormContainer = styled.form`
	background: linear-gradient(to left, #2663eb, #1f3b8b);
	width: 50%;
	border-radius: 0.8rem;
	height: 100%;
	padding: 1.5rem;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1rem;
	flex-direction: column;

	button {
		width: 80%;
		align-self: center;
		margin-top: 1.5rem;
	}

	@media (max-width: 1023px) {
		width: 100%;
	}
`;

export const FormGroup = styled.div`
	font-size: 1.6rem;
	width: 100%;
	color: var(--white);

	&:nth-child(5) {
		span {
			display: block;
			margin-bottom: 1rem;
		}

		label {
			display: inline;

			& + input {
				margin-left: 5rem;
			}

			input {
			}
		}
	}
	input[type="checkbox"] {
		margin-right: 0.25rem;
		width: 1.8rem;
		height: 1.8rem;
		background-color: white;
		border-radius: 50%;
		vertical-align: middle;
		border: 1px solid #ddd;
		appearance: none;
		-webkit-appearance: none;
		outline: none;
		cursor: pointer;

		&:checked {
			background-color: gray;
		}
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		input {
			border: none;
			border-radius: 0.8rem;
			padding: 1rem;
			background: var(--white);
		}
	}
`;
