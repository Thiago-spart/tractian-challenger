import Image from "next/image";

import { Container, Title, CapterraDiv, Content } from "./styles";

import { Primary } from "../Button/Primary";
import { Slide } from "./Slide";

export const OpinionSection = () => {
	return (
		<Container>
			<Title>O que os nossos clientes dizem:</Title>

			<Content>
				<CapterraDiv>
					<Image
						src="/capterra-badge.png"
						alt="Capterra Logo"
						width="180"
						height="180"
						objectFit="contain"
					/>
					<p>Nomeada solução favorita de CMMS e OEE no ranking da Capterra 2021</p>
					<Primary message="Agendar Demo" />
				</CapterraDiv>

				<Slide />
			</Content>
		</Container>
	);
};
