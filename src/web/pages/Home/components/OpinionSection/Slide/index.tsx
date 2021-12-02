import { useTranslation } from "next-i18next";

import { Carousel } from "@trendyol-js/react-carousel";

import { Container } from "./styles";

import { Card } from "./Card";

export const Slide: React.FC = () => {
	const { t } = useTranslation("home");

	const Content = [
		{
			quote: t("OpinionSection.quotes.tiagoJunqueira.quote"),
			imgSrc: "/quote/tiago-junqueira.png",
			profileName: t("OpinionSection.quotes.tiagoJunqueira.name"),
			profileJob: t("OpinionSection.quotes.tiagoJunqueira.job"),
		},
		{
			quote: t("OpinionSection.quotes.gustavoRibeiro.quote"),
			imgSrc: "/quote/gustavo.png",
			profileName: t("OpinionSection.quotes.gustavoRibeiro.name"),
			profileJob: t("OpinionSection.quotes.gustavoRibeiro.job"),
		},
		{
			quote: t("OpinionSection.quotes.eduardaBuaiz.quote"),
			imgSrc: "/quote/eduarda.png",
			profileName: t("OpinionSection.quotes.eduardaBuaiz.name"),
			profileJob: t("OpinionSection.quotes.eduardaBuaiz.job"),
		},
		{
			quote: t("OpinionSection.quotes.reneSantos.quote"),
			imgSrc: "/quote/rene.png",
			profileName: t("OpinionSection.quotes.reneSantos.name"),
			profileJob: t("OpinionSection.quotes.reneSantos.job"),
		},
	];

	return (
		<Container>
			<Carousel
				show={2.5}
				slide={1}
				swiping
				transition={1}
				className="carousel"
				dynamic
				rightArrow={<span style={{ display: "none" }}></span>}
				leftArrow={<span style={{ display: "none" }}></span>}
			>
				{Content.map(item => (
					<Card
						imgSrc={item.imgSrc}
						profileJob={item.profileJob}
						profileName={item.profileName}
						quote={item.quote}
						key={item.profileName}
					/>
				))}
			</Carousel>
		</Container>
	);
};
