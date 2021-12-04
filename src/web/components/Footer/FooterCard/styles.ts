import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 0.8rem;

	.img-container {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 0.8rem;

		a {
			transition: filter 0.4s ease-out;

			&:hover {
				filter: brightness(0.8);
			}
		}
	}

	@media (max-width: 1023px) {
		align-items: center;
		justify-content: center;
		gap: 0.7rem;

		.img-container {
			justify-content: center;
			gap: 0.7rem;
		}
	}
`;

export const Title = styled.h3`
	color: var(--light-blue-500);
	font-weight: 600;
	font-size: 1.5rem;
	cursor: default;
`;

export const LinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	white-space: nowrap;
	gap: 0.5rem;

	div {
		display: inline;
	}

	a {
		display: block;
	}

	a {
		color: var(--white);
		font-size: 1.2rem;
		transition: 0.4s all ease-out;

		&:hover {
			text-decoration: underline;
		}
	}

	@media (max-width: 1023px) {
		align-items: center;
		justify-content: center;
	}
`;

export const SocialContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;

	a {
		width: 3rem;
		height: 3rem;
		color: var(--white);

		svg {
			width: 100%;
			height: 100%;

			transition: filter 0.4s ease-out;

			&:hover {
				filter: brightness(0.8);
			}
		}
	}
`;

export const CompanyInfo = styled.div`
	span,
	p {
		color: var(--white);
		font-weight: 600;
	}
`;
