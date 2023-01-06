/* eslint-disable @typescript-eslint/naming-convention */
import { useTranslation } from "next-i18next";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

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
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				slidesPerView="auto"
				breakpoints={{
					270: {
						slidesPerView: 1.2,
					},
					420: {
						slidesPerView: 1.6,
					},
					768: {
						slidesPerView: 1.8,
					},
					1024: {
						slidesPerView: 2.2,
					},
					1280: {
						slidesPerView: 2.5,
					},
				}}
				loop
				spaceBetween={40}
				navigation
				pagination={false}
				scrollbar={{ draggable: true }}
				speed={800}
			>
				{Content.map(sliderItem => (
					<SwiperSlide key={sliderItem.profileName}>
						<Card
							imgSrc={sliderItem.imgSrc}
							profileJob={sliderItem.profileJob}
							profileName={sliderItem.profileName}
							quote={sliderItem.quote}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
};
