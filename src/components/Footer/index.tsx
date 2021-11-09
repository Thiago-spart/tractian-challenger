import React, { FC } from "react";

import { Container } from "./styles";

import { FooterCard } from "./FooterCard";
import { FooterContent } from "./FooterContent";

export const Footer: FC = () => {
	return (
		<Container>
			{FooterContent.filter(content => content.type === "link").map(card => (
				<FooterCard key={card.title} title={card.title} links={card.links} />
			))}
			{FooterContent.filter(content => content.type === "img").map(card => (
				<FooterCard key={card.title} title={card.title} images={card.images} />
			))}

			{FooterContent.filter(content => content.type === "social").map(card => (
				<FooterCard
					key={card.title}
					title={card.title}
					copyRight={card.copyRight}
					socialMedia={card.socialMedia}
				/>
			))}
		</Container>
	);
};
