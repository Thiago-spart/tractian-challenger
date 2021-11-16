import { Carousel } from "@trendyol-js/react-carousel";

import { Container } from "./styles";

import { Content } from "../content";
import { Card } from "./Card";

export const Slide = () => {
	return (
		<Container>
			<Carousel
				show={2.5}
				slide={1}
				swiping
				transition={1}
				className="carousel"
				dynamic
				rightArrow={<span style={{ display: "none" }}></span>}
				leftArrow={<span style={{ display: "none" }}></span>}
			>
				{Content.map(item => (
					<Card
						imgSrc={item.imgSrc}
						profileJob={item.profileJob}
						profileName={item.profileName}
						quote={item.quote}
						key={item.profileName}
					/>
				))}
			</Carousel>
		</Container>
	);
};
