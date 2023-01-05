/* eslint-disable multiline-ternary */
/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import Image from "next/image";

import { NextLink } from "web/components/Link";

import { Button } from "@components/Button";

import * as S from "./styles";

export const PlanSection: React.FC = () => {
	const { t } = useTranslation("home");

	const Content = [
		{
			black: true,
			title: t("planSection.tracOS.title"),
			subTitle: t("planSection.tracOS.subTitle"),
			href: "https://tractian.com/tracos",
			imgSrc: "/plan/cmms-presentation.png",
		},
		{
			black: false,
			title: t("planSection.smartTrac.title"),
			subTitle: t("planSection.smartTrac.subTitle"),
			href: "https://tractian.com/sensor-inteligente",
			imgSrc: "/plan/sensor-plataforma-celular-tablet.png",
		},
	];

	return (
		<S.Container>
			{Content.map(card => (
				<S.Card isDark={typeof card.black !== undefined} key={card.title}>
					<Image src="/Logo-Tractian.svg" alt="Tractian logo" width="230" height="48" />

					<h2>{card.title.toUpperCase()}</h2>
					{card.black ? (
						<S.CustomImageDivider
							src="/plan/green-line.png"
							alt="Green line"
							width="360"
							height="10"
						/>
					) : (
						<S.CustomImageDivider
							src="/plan/blue-line.png"
							alt="Blue line"
							width="360"
							height="10"
						/>
					)}

					<S.ProductBannerImage src={card.imgSrc} alt={card.title} width="480" height="366" />

					<p>{card.subTitle}</p>

					<NextLink href={card.href} target="_blank">
						<Button schema={card.black ? "secondary" : "primary"} isFullWidth>
							{`${t("planSection.buttonMessage")} ${card.title}`}
						</Button>
					</NextLink>
				</S.Card>
			))}
		</S.Container>
	);
};
