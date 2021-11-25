import {
	SlideContainer,
	Slides,
	Container,
	TitleContainer,
	SlideStyle,
	CirclePulse,
} from "./styles";

import { Card } from "./Card";
import { CardContent } from "./CardContent";

const newContent = [...CardContent, ...CardContent];

export const QualitySection = () => {
	return (
		<Container>
			<TitleContainer>
				<CirclePulse />
				<p>Superpoderes para a sua manutenção</p>
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
