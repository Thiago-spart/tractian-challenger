import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

import { Container, ImgContainer, MobileMenu } from "./styles";

import { Primary } from "../Button/Primary";
import { NextLink } from "../Link";
import { NavMenu } from "./NavMenu";

interface HeaderProps {
	isModalOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isModalOpen }) => {
	const { t } = useTranslation("header");
	const [scroll, setScroll] = useState(false);
	const scrollDown = 50;
	const { push } = useRouter();

	useEffect(() => {
		window.onscroll = () => {
			setScroll(
				document.body.scrollTop > scrollDown || document.documentElement.scrollTop > scrollDown,
			);
		};
	}, [push]);

	return (
		<Container scroll={scroll}>
			<NextLink href="/">
				<ImgContainer>
					<Image
						src="/Logo-Tractian.svg"
						alt="company logo"
						width="170"
						height="60"
						objectFit="fill"
					/>
				</ImgContainer>
			</NextLink>
			<NavMenu />

			<Primary message={t("buttonMessage")} />

			<MobileMenu onClick={isModalOpen}>
				<MdMenu />
			</MobileMenu>
		</Container>
	);
};
