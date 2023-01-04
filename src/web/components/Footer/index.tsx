import { useTranslation } from "next-i18next";

import type { FC } from "react";
import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import { Container } from "./styles";

import { FooterCard } from "./FooterCard";

export const Footer: FC = () => {
	const { t } = useTranslation("footer");

	const FooterContent = [
		{
			type: "link",
			title: t("about.title"),
			links: [
				{
					name: t("about.workWithUs"),
					path: "#",
				},
				{
					name: t("about.meetUs"),
					path: "#",
				},
				{
					name: t("about.successHistories"),
					path: "#",
				},
				{
					name: t("about.press"),
					path: "#",
				},
				{
					name: t("about.privacyPolicy"),
					path: "#",
				},
			],
		},
		{
			type: "link",
			title: t("product.title"),
			links: [
				{
					name: t("product.sensor"),
					path: "#",
				},
				{
					name: t("product.platform"),
					path: "#",
				},
				{
					name: t("product.functionality"),
					path: "#",
				},
				{
					name: t("product.plans"),
					path: "#",
				},
				{
					name: t("product.recommendation"),
					path: "#",
				},
			],
		},
		{
			type: "link",
			title: t("material.title"),
			links: [
				{
					name: t("material.guideAndEbooks"),
					path: "#",
				},
				{
					name: t("material.checklist"),
					path: "#",
				},
				{
					name: t("material.calculator"),
					path: "#",
				},
				{
					name: t("material.intesivao"),
					path: "#",
				},
			],
		},
		{
			type: "link",
			title: t("contactUs.title"),
			links: [
				{
					name: t("contactUs.contact"),
					path: "#",
				},
			],
		},
		{
			type: "img",
			title: t("investor.title"),
			images: [
				{
					urlPath: "/logo-ycombinator-branca.png",
					alt: "Combinator",
					linkPath: "#",
				},
				{
					urlPath: "/logo-dfg-branca.png",
					alt: "DGF Investimentos",
					linkPath: "#",
				},
			],
		},
		{
			type: "img",
			title: t("investor.title"),
			images: [
				{
					urlPath: "/logo-gptw.png",
					alt: "Great Place To Work",
					linkPath: "#",
				},
				{
					urlPath: "/logo-stw.png",
					alt: "100 Startups to match 2021",
					linkPath: "#",
				},
				{
					urlPath: "/capterra-badge.png",
					alt: "Capterra",
					linkPath: "#",
				},
			],
		},
		{
			type: "social",
			title: t("connectWithUs.title"),
			socialMedia: [
				{
					urlPath: "https://www.linkedin.com",
					description: "Linkedin",
					icon: <FaLinkedinIn />,
				},
				{
					urlPath: "https://www.facebook.com",
					description: "Facebook",
					icon: <FaFacebookF />,
				},
				{
					urlPath: "https://www.instagram.com",
					description: "Instagram",
					icon: <FaInstagram />,
				},
				{
					urlPath: "https://www.youtube.com",
					description: "Youtube",
					icon: <FaYoutube />,
				},
			],
			copyRight: {
				message: t("copyRight"),
				cnpj: "CNPJ: 35.755.699/0001-84",
			},
		},
	];

	return (
		<Container>
			{FooterContent.filter(content => content.type === "link").map(card => (
				<FooterCard key={card.title} title={card.title} links={card.links} />
			))}
			{FooterContent.filter(content => content.type === "img").map(card => (
				<FooterCard key={card.title} title={card.title} images={card.images} />
			))}

			{FooterContent.filter(content => content.type === "social").map(card => (
				<FooterCard
					key={card.title}
					title={card.title}
					copyRight={card.copyRight}
					socialMedia={card.socialMedia}
				/>
			))}
		</Container>
	);
};
