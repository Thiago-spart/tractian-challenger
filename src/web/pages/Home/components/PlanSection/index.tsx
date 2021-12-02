import { useTranslation } from "next-i18next";
import Image from "next/image";

import { Primary } from "web/components/Button/Primary";
import { Secondary } from "web/components/Button/Secondary";
import { NextLink } from "web/components/Link";

import { Card, Container, Title, SubTitle } from "./styles";

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
		<Container>
			{Content.map(card => (
				<Card black={typeof card.black !== undefined} key={card.title}>
					<Image
						src="/Logo-Tractian.svg"
						alt="Tractian logo"
						width="230"
						height="48"
						objectFit="contain"
					/>
					<Title>{card.title.toUpperCase()}</Title>
					{card.black && (
						<Image
							src="/plan/green-line.png"
							alt="Green line"
							width="360"
							height="10"
							objectFit="contain"
						/>
					)}

					{!card.black && (
						<Image
							src="/plan/blue-line.png"
							alt="Blue line"
							width="360"
							height="10"
							objectFit="contain"
						/>
					)}

					<Image src={card.imgSrc} alt={card.title} width="480" height="366" objectFit="contain" />
					<SubTitle>{card.subTitle}</SubTitle>
					<NextLink href={card.href} target="_blank">
						{card.black && (
							<Secondary message={`${t("planSection.buttonMessage")} ${card.title}`} />
						)}
						{!card.black && <Primary message={`${t("planSection.buttonMessage")} ${card.title}`} />}
					</NextLink>
				</Card>
			))}
		</Container>
	);
};
