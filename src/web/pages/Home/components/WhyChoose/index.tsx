import { useTranslation } from "next-i18next";

import { Primary } from "web/components/Button/Primary";

import { Container, Title, CardContainer } from "./styles";

import { Card } from "./Card";

export const WhyChoose = () => {
	const { t } = useTranslation("home");

	const CardContent = [
		{
			title: t("whyChoose.cards.predictiveMaintenance.title"),
			text: t("whyChoose.cards.predictiveMaintenance.text"),
			imgSrc: "/whyChoose/icon-maintence-plataform.svg",
		},
		{
			title: t("whyChoose.cards.onlineMonitoring.title"),
			text: t("whyChoose.cards.onlineMonitoring.text"),
			imgSrc: "/whyChoose/icon-maintence-online.svg",
		},
		{
			title: t("whyChoose.cards.instantSetup.title"),
			text: t("whyChoose.cards.instantSetup.text"),
			imgSrc: "/whyChoose/icon-maintence-horimeter.svg",
		},
		{
			title: t("whyChoose.cards.integratedCMMS.title"),
			text: t("whyChoose.cards.integratedCMMS.text"),
			imgSrc: "/whyChoose/icon-maintence-pump.svg",
		},
	];

	return (
		<Container>
			<Title>
				{t("whyChoose.title")} <span>{t("whyChoose.companyName")}</span>?
			</Title>

			<CardContainer>
				{CardContent.map(card => (
					<Card
						key={card.title}
						imgAlt={card.title.toLowerCase()}
						imgSrc={card.imgSrc}
						text={card.text}
						title={card.title}
					/>
				))}
			</CardContainer>

			<Primary message={t("whyChoose.buttonMessage")} />
		</Container>
	);
};
