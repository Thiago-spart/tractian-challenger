import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import React from "react";
import { MdMenu } from "react-icons/md";

import { Button } from "@components/Button";
import { NextLink } from "@components/Link";

import * as S from "./styles";

import { NavMenu } from "./NavMenu";

interface HeaderProps {
	isModalOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isModalOpen }) => {
	const { t } = useTranslation("header");
	const [scroll, setScroll] = React.useState(false);
	const { push } = useRouter();

	const isScrollingDown = 50;

	React.useEffect(() => {
		window.onscroll = () => {
			setScroll(
				document.body.scrollTop > isScrollingDown ||
					document.documentElement.scrollTop > isScrollingDown,
			);
		};
	}, [push]);

	return (
		<S.Container scroll={scroll}>
			<NextLink href="/">
				<S.LogoImg src="/Logo-Tractian.svg" alt="Tractian" width="170" height="60" />
			</NextLink>
			<NavMenu />

			<Button>{String(t("buttonMessage"))}</Button>

			<S.MobileMenu onClick={isModalOpen}>
				<MdMenu />
			</S.MobileMenu>
		</S.Container>
	);
};
