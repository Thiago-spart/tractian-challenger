import React, { FC } from "react";

import { Primary } from "web/components/Button/Primary";
import { SwitchLanguageButton } from "web/components/Button/SwitchLanguageButton";
import { Items } from "web/components/Header/menuItems";

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

				<MenuItem>
					<SwitchLanguageButton />
				</MenuItem>
			</Menu>
		</NavContainer>
	);
};
