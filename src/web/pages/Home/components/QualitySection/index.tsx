import { useTranslation } from "next-i18next";

import {
	SlideContainer,
	Slides,
	Container,
	TitleContainer,
	SlideStyle,
	CirclePulse,
} from "./styles";

import { Card } from "./Card";

export const QualitySection: React.FC = () => {
	const { t } = useTranslation("home");

	const CardContent = [
		{
			src: "/icons/exclamation.svg",
			message: t("qualitySection.firstCard"),
			colorOne: "#24cbef",
			colorTwo: "#3693f4",
		},
		{
			src: "/icons/exclamation-circle.svg",
			message: t("qualitySection.secondCard"),
			colorOne: "#a157f6",
			colorTwo: "#7062f1",
		},
		{
			src: "/icons/minus-circle.svg",
			message: t("qualitySection.thirdCard"),
			colorOne: "#fab715",
			colorTwo: "#f98916",
		},
		{
			src: "/icons/fire.svg",
			message: t("qualitySection.fourthCard"),
			colorOne: "#f1724e",
			colorTwo: "#e13a6d",
		},
	];

	const newContent = [...CardContent, ...CardContent];

	return (
		<Container>
			<TitleContainer>
				<CirclePulse />
				<p>{t("qualitySection.title")}</p>
			</TitleContainer>

			<SlideStyle>
				<SlideContainer>
					<Slides className="animate">
						{newContent.map((card, index) => {
							const keyValue = `${card.message} ${index}`;

							return (
								<li key={keyValue}>
									<Card
										alt={card.message}
										src={card.src}
										colorOne={card.colorOne}
										colorTwo={card.colorTwo}
										message={card.message}
									/>
								</li>
							);
						})}
					</Slides>
				</SlideContainer>
			</SlideStyle>
		</Container>
	);
};
