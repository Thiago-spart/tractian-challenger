import { useRouter } from "next/router";

import React, { FC, useEffect, useState } from "react";
import { DiAndroid } from "react-icons/di";

import { DownOutlined } from "@ant-design/icons";

import { Dropdown } from "../../../components/Button/Dropdown";
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
				<Dropdown
					width={121}
					actions={[
						{
							title: "Carta de Quitação",
							subTitle: "Saúde do Ativo, Ordens de Serviço, Insights Automáticos e muito mais.",
							icon: <DiAndroid />,
							handleSelect: () => {},
						},
						{
							title: "Declaração",
							subTitle: "Saúde do Ativo, Ordens de Serviço, Insights Automáticos e muito mais.",
							icon: <DiAndroid />,
							handleSelect: () => {},
						},
					]}
					footer={[
						{
							message: "testando 123",
							handleSelect: () => {},
							icon: <DiAndroid />,
						},
						{
							message: "testando 1823",
							handleSelect: () => {},
						},
					]}
					placeholder="Gerar"
				/>

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
