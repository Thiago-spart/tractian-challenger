import { useTranslation } from "next-i18next";
import Image from "next/image";

import { Primary } from "web/components/Button/Primary";

import { Container, Title, CapterraDiv, Content } from "./styles";

import { Slide } from "./Slide";

export const OpinionSection: React.FC = () => {
	const { t } = useTranslation("home");

	return (
		<Container>
			<Title>{t("OpinionSection.title")}</Title>

			<Content>
				<CapterraDiv>
					<Image
						src="/capterra-badge.png"
						alt="Capterra Logo"
						width="180"
						height="180"
						objectFit="contain"
					/>
					<p>{t("OpinionSection.subTitle")}</p>
					<Primary message={t("OpinionSection.buttonMessage")} />
				</CapterraDiv>

				<Slide />
			</Content>
		</Container>
	);
};
