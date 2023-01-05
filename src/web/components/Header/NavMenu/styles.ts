import styled from "styled-components";

export const NavContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Menu = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1.5rem;

	@media (min-width: 1023px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
`;
