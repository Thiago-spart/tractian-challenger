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

  h2 {
		font-size: 3rem;
		line-height: 3.6rem;
		font-weight: 500;

		@media screen and (min-width: 640px) {
			font-size: 3.6rem;
			line-height: 4rem;
		}
	}

	p {
		color: #52525b;
	}
`;

export const FormContainer = styled.form`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;

	background: linear-gradient(to left, #2663eb, #1f3b8b);
	border-radius: 0.8rem;

	padding: 1.5rem;
	width: 100%;
	height: 100%;

	button {
		width: 80%;
		align-self: center;
		margin-top: 1.5rem;
	}

	@media screen and (min-width: 1023px) {
		flex-direction: column;
		width: 50%;
	}
`;

export const FormGroup = styled.div`
	width: 100%;
	display: flex;
	justify-items: flex-start;
	flex-direction: column;
	gap: 0.5rem;

	color: var(--white);

	font-size: 1.6rem;

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
	}

	input {
		width: 100%;
		border: none;
		border-radius: 0.8rem;
		padding: 1rem;
		background: var(--white);
	}
`;

export const RadioFormGroup = styled.div`
	display: flex;
	justify-items: flex-start;
	gap: 2rem;
	flex-wrap: wrap;

	color: var(--white);

	font-size: 1.6rem;

	span {
		width: 100%;
		display: block;
	}

	div {
		display: flex;
		justify-items: center;
		gap: 0.5rem;
		flex-basis: 12rem;
	}

	@media screen and (min-width: 740px) {
		justify-content: space-between;
	}
`;
