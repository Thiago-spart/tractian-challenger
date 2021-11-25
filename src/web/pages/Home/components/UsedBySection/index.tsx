import { SlideContainer, Slides, Container } from "./styles";

import { Card } from "./Card";
import { CardContent } from "./CardContent";

export const UsedBySection = () => {
	return (
		<Container>
			<SlideContainer>
				<Slides className="animate">
					{CardContent.map(card => (
						<li key={card.alt}>
							<Card alt={card.alt} src={card.src} />
						</li>
					))}
				</Slides>
			</SlideContainer>
		</Container>
	);
};
