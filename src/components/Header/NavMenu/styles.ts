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
	gap: 30px;
	margin: 0;
	margin-top: 10px;

	@media (max-width: 1023px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 15px;
	}
`;

export const MenuItem = styled.li`
	list-style: none;
`;
