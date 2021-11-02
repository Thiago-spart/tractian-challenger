import Image from "next/image";

import React, { FC } from "react";
import { MdMenu } from "react-icons/md";

import { Container, ImgContainer, MobileMenu } from "./styles";

import { Primary } from "../Button/Primary";
import { NextLink } from "../Link";
import { NavMenu } from "./NavMenu";

interface HeaderProps {
	isModalOpen: () => void;
}

export const Header: FC<HeaderProps> = ({ isModalOpen }) => {
	return (
		<Container>
			<NextLink href="/">
				<ImgContainer>
					<Image src="/Logo-Tractian.svg" alt="company logo" width="200" height="40" />
				</ImgContainer>
			</NextLink>
			<NavMenu />

			<Primary message="Demonstração" />

			<MobileMenu onClick={isModalOpen}>
				<MdMenu />
			</MobileMenu>
		</Container>
	);
};
