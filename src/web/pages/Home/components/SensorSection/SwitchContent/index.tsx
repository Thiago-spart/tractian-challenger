import Image from "next/image";

import { Container, Title, Text } from "./styles";

interface SwitchContentProps {
	imgSrc: string;
	imgAlt: string;
	title: string;
	text: string;
}

export const SwitchContent = ({ imgAlt, imgSrc, text, title }: SwitchContentProps) => {
	return (
		<Container>
			<Image src={imgSrc} alt={imgAlt} height="400" width="600" objectFit="contain" />
			<Title>{title}</Title>
			<Text>{text}</Text>
		</Container>
	);
};
