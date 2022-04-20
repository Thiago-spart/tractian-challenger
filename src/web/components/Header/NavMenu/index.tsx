import { useTranslation } from "next-i18next";

import type { FC } from "react";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { GrAppsRounded } from "react-icons/gr";
import {
	HiOutlineCurrencyDollar,
	HiOutlineCursorClick,
	HiOutlineEye,
	HiOutlineMailOpen,
	HiOutlineShieldCheck,
} from "react-icons/hi";
import { ImArrowUpRight2 } from "react-icons/im";
import {
	MdOutlineBook,
	MdOutlineSpaceDashboard,
	MdPlayCircleOutline,
	MdSensors,
} from "react-icons/md";

import { Primary } from "web/components/Button/Primary";
import { SwitchLanguageButton } from "web/components/Button/SwitchLanguageButton";

import { NavContainer, Menu, MenuItem } from "./styles";

import { Dropdown } from "../../Button/Dropdown";

export const NavMenu: FC = () => {
	const { t } = useTranslation("header");

	const Items = [
		{
			pathname: "/product",
			type: "dropdown",
			placeholder: t("navbar.product.name"),
			actions: [
				{
					handleSelect: () => {},
					title: t("navbar.product.sensorPage.title"),
					subTitle: t("navbar.product.sensorPage.subTitle"),
					icon: <MdSensors />,
				},
				{
					handleSelect: () => {},
					title: t("navbar.product.Platform.title"),
					subTitle: t("navbar.product.Platform.subTitle"),
					icon: <HiOutlineCursorClick />,
				},
				{
					handleSelect: () => {},
					title: t("navbar.product.functionality.title"),
					subTitle: t("navbar.product.functionality.subTitle"),
					icon: <HiOutlineShieldCheck />,
				},
				{
					handleSelect: () => {},
					title: t("navbar.product.plans.title"),
					subTitle: t("navbar.product.plans.subTitle"),
					icon: <GrAppsRounded />,
				},
			],
			footer: [
				{
					handleSelect: () => {},
					message: t("navbar.product.scheduleADemo.title"),
					icon: <MdPlayCircleOutline />,
				},
			],
		},
		{
			pathname: "/about",
			type: "dropdown",
			placeholder: t("navbar.aboutUs.name"),
			actions: [
				{
					handleSelect: () => {},
					title: t("navbar.aboutUs.meetTractian.title"),
					subTitle: t("navbar.aboutUs.meetTractian.subTitle"),
					icon: <HiOutlineEye />,
				},
				{
					handleSelect: () => {},
					title: t("navbar.aboutUs.successHistories.title"),
					subTitle: t("navbar.aboutUs.successHistories.subTitle"),
					icon: <ImArrowUpRight2 />,
				},
				{
					handleSelect: () => {},
					title: t("navbar.aboutUs.contact.title"),
					subTitle: t("navbar.aboutUs.contact.subTitle"),
					icon: <HiOutlineMailOpen />,
				},
				{
					handleSelect: () => {},
					title: t("navbar.aboutUs.workForUs.title"),
					subTitle: t("navbar.aboutUs.workForUs.subTitle"),
					icon: <MdOutlineSpaceDashboard />,
				},
				{
					handleSelect: () => {},
					title: t("navbar.aboutUs.media.title"),
					subTitle: t("navbar.aboutUs.media.subTitle"),
					icon: <MdOutlineSpaceDashboard />,
				},
			],
		},
		{
			pathname: "/freeResources",
			type: "dropdown",
			placeholder: t("navbar.freeMaterial.name"),
			actions: [
				{
					handleSelect: () => {},
					title: t("navbar.freeMaterial.guides.title"),
					subTitle: t("navbar.freeMaterial.guides.subTitle"),
					icon: <MdOutlineBook />,
				},
				{
					handleSelect: () => {},
					title: t("navbar.freeMaterial.checkList.title"),
					subTitle: t("navbar.freeMaterial.checkList.subTitle"),
					icon: <FiCheckCircle />,
				},
				{
					handleSelect: () => {},
					title: t("navbar.freeMaterial.roiCalculator.title"),
					subTitle: t("navbar.freeMaterial.roiCalculator.subTitle"),
					icon: <HiOutlineCurrencyDollar />,
				},
			],
			footer: [
				{
					handleSelect: () => {},
					type: "text",
					title: t("navbar.freeMaterial.recentMaterial.title"),
				},
				{
					handleSelect: () => {},
					type: "link",
					message: t("navbar.freeMaterial.lookingForZeroDowntime.title"),
				},
				{
					handleSelect: () => {},
					type: "link",
					message: t("navbar.freeMaterial.completeGuide.title"),
				},
				{
					handleSelect: () => {},
					type: "link",
					message: t("navbar.freeMaterial.seeAll.title"),
				},
			],
		},
		{
			pathname: "/blog",
			type: "button",
			placeholder: t("navbar.blog.name"),
		},
		{
			pathname: "/client",
			type: "button",
			placeholder: t("navbar.clientArea.name"),
		},
	];

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
