/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";

import { Primary } from "web/components/Button/Primary";
import { NextLink } from "web/components/Link";

import { Container, GifContainer, ContentContainer, WaveContainer } from "./styles";

export const WelcomeSection: React.FC = () => {
	const { t } = useTranslation("home");

	return (
		<Container>
			<ContentContainer>
				<h1>{t("welcomeSection.title")}</h1>
				<div>
					<p>google and capterra</p>
				</div>
				<h4>{t("welcomeSection.subTitle")}</h4>
				<Primary message={t("welcomeSection.buttonMessage")} />
				<p>
					{t("welcomeSection.clienteInvite")}
					<NextLink href="https://app.tractian.com">{t("welcomeSection.paragraphLink")}</NextLink>
				</p>
			</ContentContainer>

			<GifContainer>
				<img src="/painelAnimation.svg" alt="motor gif" />
			</GifContainer>

			<WaveContainer>
				<svg
					className="waves"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 24 150 28"
					preserveAspectRatio="none"
					shapeRendering="auto"
				>
					<defs>
						<path
							id="gentle-wave"
							d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
						/>
					</defs>
					<g className="parallax">
						<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
						<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
						<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
						<use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
					</g>
				</svg>
			</WaveContainer>
		</Container>
	);
};
