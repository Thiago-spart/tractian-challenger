import { Primary } from "web/components/Button/Primary";

import { Container, Title, CardContainer } from "./styles";

import { Card } from "./Card";
import { CardContent } from "./CardContent";

export const WhyChoose = () => {
	return (
		<Container>
			<Title>
				Por que escolher a <span>Tractian</span>?
			</Title>

			<CardContainer>
				{CardContent.map(card => (
					<Card
						key={card.title}
						imgAlt={card.imgAlt}
						imgSrc={card.imgSrc}
						text={card.text}
						title={card.title}
					/>
				))}
			</CardContainer>

			<Primary message="Começar agora!" />
		</Container>
	);
};
