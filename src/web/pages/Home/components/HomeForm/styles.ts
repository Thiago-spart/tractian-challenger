import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	flex-direction: column;
	padding: 4rem;
	background-color: #ffffff;

	p {
		color: #52525b;
		font-size: 1rem;
	}
`;

export const Title = styled.h2`
	font-size: 2.2rem;
	font-weight: 500;
	margin: 0;
`;

export const FormContainer = styled.form`
	background: linear-gradient(to left, #2663eb, #1f3b8b);
	width: 50%;
	border-radius: 0.5rem;
	height: 100%;
	padding: 1rem;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 0.5rem;
	flex-direction: column;

	button {
		width: 80%;
		align-self: center;
		margin-top: 1rem;
	}

	@media (max-width: 1023px) {
		width: 100%;
	}
`;

export const FormGroup = styled.div`
	font-size: 1rem;
	width: 100%;
	color: #ffffff;

	&:nth-child(5) {
		span {
			display: block;
			margin-bottom: 0.5rem;
		}

		label {
			display: inline;

			& + input {
				margin-left: 4rem;
			}

			input {
			}
		}
	}
	input[type="checkbox"] {
		margin-right: 0.15rem;
		width: 1.1em;
		height: 1.1em;
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
		gap: 0.5rem;

		input {
			border: none;
			border-radius: 0.5rem;
			padding: 0.5rem;
		}
	}
`;
