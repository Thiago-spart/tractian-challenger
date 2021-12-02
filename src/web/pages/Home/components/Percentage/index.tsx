import { useTranslation } from "next-i18next";

import { Card, Container, Title, CardContainer } from "./styles";

export const Percentage: React.FC = () => {
	const { t } = useTranslation("home");

	return (
		<Container>
			<Title>{t("percentageSection.title")}</Title>

			<CardContainer>
				<Card>
					<h6>90%</h6>
					<p>{t("percentageSection.firstCard.message")}</p>
				</Card>
				<Card>
					<h6>45%</h6>
					<p>{t("percentageSection.secondCard.message")}</p>
				</Card>
				<Card>
					<h6>30%</h6>
					<p>{t("percentageSection.thirdCard.message")}</p>
				</Card>
			</CardContainer>
		</Container>
	);
};
