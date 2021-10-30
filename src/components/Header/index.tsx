import Image from "next/image";

import React, { FC } from "react";

import { Container, ImgContainer } from "./styles";

import { Primary } from "../Button/Primary";
import { NextLink } from "../Link";
import { NavMenu } from "./NavMenu";

interface HeaderProps {
	menuItems: Array<MenuGlobal.MenuItem>;
}

export const Header: FC<HeaderProps> = ({ menuItems }) => (
	<Container>
		<NextLink href="/">
			<ImgContainer>
				<Image src="/Logo-Tractian.svg" alt="company logo" width="200" height="40" />
			</ImgContainer>
		</NextLink>
		<NavMenu menuItems={menuItems} />

		<Primary message="Demonstração" />
	</Container>
);
