import React, { FC } from "react";

import { Container, ImgContainer } from "./styles";

import { NavMenu } from "./NavMenu";

interface HeaderProps {
	menuItems: Array<MenuGlobal.MenuItem>;
}

export const Header: FC<HeaderProps> = ({ menuItems }) => (
	<Container>
		{/* <ImgContainer>
      <img src="" alt="company logo" />
    </ImgContainer> */}
		<NavMenu menuItems={menuItems} />
	</Container>
);
