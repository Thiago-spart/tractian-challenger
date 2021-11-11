import Image from "next/image";

import React, { FC, useState } from "react";
import { MdMenu } from "react-icons/md";

import { Container, ImgContainer, MobileMenu } from "./styles";

import { Primary } from "../Button/Primary";
import { NextLink } from "../Link";
import { NavMenu } from "./NavMenu";

interface HeaderProps {
	isModalOpen: () => void;
}

export const Header: FC<HeaderProps> = ({ isModalOpen }) => {
	const [scroll, setScroll] = useState(false);
	const scrollDown = 50;

	if (typeof window !== "undefined") {
		window.onscroll = () => {
			setScroll(
				document.body.scrollTop > scrollDown || document.documentElement.scrollTop > scrollDown,
			);
		};
	}

	return (
		<Container scroll={scroll}>
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
