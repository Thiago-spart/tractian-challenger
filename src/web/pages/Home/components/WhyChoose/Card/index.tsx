import Image from "next/image";

import { Container, ImgContainer, Title } from "./styles";

interface CardProps {
	title: string;
	text: string;
	imgSrc: string;
	imgAlt: string;
}

export const Card = ({ imgAlt, imgSrc, text, title }: CardProps) => {
	return (
		<Container>
			<ImgContainer>
				<Image alt={imgAlt} src={imgSrc} width="70" height="80" />
			</ImgContainer>

			<Title>{title}</Title>
			<p>{text}</p>
		</Container>
	);
};
