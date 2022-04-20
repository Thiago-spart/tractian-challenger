import styled from "styled-components";

export const NavContainer = styled.nav`
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Menu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	margin: 0;

	@media (max-width: 1023px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 1.5rem;
	}
`;

export const MenuItem = styled.li`
	list-style: none;
`;
