import { useTranslation } from "next-i18next";
import Image from "next/image";

import { Button } from "@components/Button";

import * as S from "./styles";

import { Slide } from "./Slide";

export const OpinionSection: React.FC = () => {
	const { t } = useTranslation("home");

	return (
		<S.Container>
			<h2>{t("OpinionSection.title")}</h2>

			<S.Content>
				<S.CapterraDiv>
					<Image src="/capterra-badge.png" alt="Capterra Logo" width="180" height="180" />

					<p>{t("OpinionSection.subTitle")}</p>

					<Button>{t("OpinionSection.buttonMessage")}</Button>
				</S.CapterraDiv>

				<Slide />
			</S.Content>
		</S.Container>
	);
};
