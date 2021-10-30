import { useRouter } from "next/router";

import React, { FC, useEffect, useState } from "react";

import { DownOutlined } from "@ant-design/icons";

import { SwitchLanguageButton } from "src/components/Button/SwitchLanguageButton";
import { NextLink } from "src/components/Link";

import { NavContainer, Menu, MenuItem } from "./styles";

interface Props {
	menuItems: Array<MenuGlobal.MenuItem>;
}

export const NavMenu: FC<Props> = ({ menuItems }) => {
	const router = useRouter();
	const [selectedLink, setSelectedLink] = useState("/");

	useEffect(() => {
		setSelectedLink(router.pathname);
	}, [router.pathname]);

	return (
		<NavContainer>
			<Menu>
				{menuItems?.map(item => (
					<MenuItem key={item.key} active={selectedLink === item.pathname && true}>
						<NextLink href={item.pathname}>
							{item.title} {item.type === "dropdown" && <DownOutlined />}
						</NextLink>
					</MenuItem>
				))}
			</Menu>
		</NavContainer>
	);
};
