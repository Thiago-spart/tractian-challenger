/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";

import { Button } from "@components/Button";
import { NextLink } from "@components/Link";

import * as S from "./styles";

export const WelcomeSection: React.FC = () => {
	const { t } = useTranslation("home");

	return (
		<S.Container>
			<S.ContentContainer>
				<h1>{t("welcomeSection.title")}</h1>
				<S.ReviewContainer>
					<img src="/capterra-review.svg" alt="capterra review" />
					<img src="/google-review.svg" alt="google review" />
				</S.ReviewContainer>
				<h4>{t("welcomeSection.subTitle")}</h4>
				<Button>{t("welcomeSection.buttonMessage")}</Button>
				<p>
					{t("welcomeSection.clienteInvite")}
					<NextLink href="https://app.tractian.com">{t("welcomeSection.paragraphLink")}</NextLink>
				</p>
			</S.ContentContainer>

			<S.GifContainer>
				<img src="/painelAnimation.svg" alt="motor gif" />
			</S.GifContainer>

			<S.WaveContainer>
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
			</S.WaveContainer>
		</S.Container>
	);
};
