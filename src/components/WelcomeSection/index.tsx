import { Container, GifContainer, ContentContainer, WaveContainer } from "./styles";

import { Primary } from "../Button/Primary";
import { NextLink } from "../Link";

export const WelcomeSection = () => {
	return (
		<Container>
			<ContentContainer>
				<h1>Monitoramento Online e Gestão de Ativos em um só lugar</h1>
				<h4>
					Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com
					sistema preditivo da TRACTIAN.
				</h4>
				<div>
					<Primary message="Demonstração" />
					<p>google and capterra</p>
				</div>
				<p>
					Já é cliente? <NextLink href="https://app.tractian.com">Acesse aqui.</NextLink>
				</p>
			</ContentContainer>

			<GifContainer>
				<span>gif</span>
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
						<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
					</g>
				</svg>
			</WaveContainer>
		</Container>
	);
};
