/* eslint-disable @next/next/no-img-element */
import { Primary } from "web/components/Button/Primary";

import { Container, Title, Text } from "./styles";

interface SwitchContentProps {
	imgSrc: string;
	imgAlt: string;
	title: string;
	text: string;
	buttonMessage: string;
}

export const SwitchContent = ({
	imgAlt,
	imgSrc,
	text,
	title,
	buttonMessage,
}: SwitchContentProps) => {
	return (
		<Container>
			<img src={imgSrc} alt={imgAlt} />
			<Title>{title}</Title>
			<Text>{text}</Text>

			<Primary message={buttonMessage} />
		</Container>
	);
};
