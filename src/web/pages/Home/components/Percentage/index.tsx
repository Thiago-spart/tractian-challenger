import { useTranslation } from "next-i18next";

import * as S from "./styles";

export const Percentage: React.FC = () => {
	const { t } = useTranslation("home");

	return (
		<S.Container>
			<h2>{t("percentageSection.title")}</h2>

			<S.GridContainer>
				<S.Card>
					<h6>90%</h6>
					<p>{t("percentageSection.firstCard.message")}</p>
				</S.Card>
				<S.Card>
					<h6>45%</h6>
					<p>{t("percentageSection.secondCard.message")}</p>
				</S.Card>
				<S.Card>
					<h6>30%</h6>
					<p>{t("percentageSection.thirdCard.message")}</p>
				</S.Card>
			</S.GridContainer>
		</S.Container>
	);
};
