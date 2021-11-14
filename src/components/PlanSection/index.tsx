import Image from "next/image";

import { Card, Container, Title, SubTitle } from "./styles";

import { Primary } from "../Button/Primary";
import { Secondary } from "../Button/Secondary";
import { NextLink } from "../Link";
import { Content } from "./Content";

export const PlanSection = () => {
	return (
		<Container>
			{Content.map(card => (
				<Card black={typeof card.black !== undefined} key={card.title}>
					<Image
						src="/Logo-Tractian.svg"
						alt="Tractian logo"
						width="230"
						height="48"
						objectFit="contain"
					/>
					<Title>{card.title}</Title>
					{card.black && (
						<Image
							src="/plan/green-line.png"
							alt="Green line"
							width="360"
							height="10"
							objectFit="contain"
						/>
					)}

					{!card.black && (
						<Image
							src="/plan/blue-line.png"
							alt="Blue line"
							width="360"
							height="10"
							objectFit="contain"
						/>
					)}

					<Image src={card.imgSrc} alt={card.imgAlt} width="480" height="366" objectFit="contain" />
					<SubTitle>{card.subTitle}</SubTitle>
					<NextLink href={card.href} target="_blank">
						{card.black && <Secondary message="Ver mais" />}
						{!card.black && <Primary message="Ver mais" />}
					</NextLink>
				</Card>
			))}
		</Container>
	);
};
