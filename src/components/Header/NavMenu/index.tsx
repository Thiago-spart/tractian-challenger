import React, { FC } from "react";

import { Primary } from "src/components/Button/Primary";
import { Items } from "src/components/Header/menuItems";

import { NavContainer, Menu, MenuItem } from "./styles";

import { Dropdown } from "../../Button/Dropdown";

export const NavMenu: FC = () => {
	return (
		<NavContainer>
			<Menu>
				{Items.map(item => {
					if (item.type === "dropdown") {
						return (
							<MenuItem key={item.placeholder}>
								<Dropdown
									placeholder={item.placeholder}
									actions={item.actions}
									footer={item.footer}
									width={121}
								/>
							</MenuItem>
						);
					}

					return (
						<MenuItem key={item.placeholder}>
							<Primary message={item.placeholder} noBackground />
						</MenuItem>
					);
				})}
			</Menu>
		</NavContainer>
	);
};
