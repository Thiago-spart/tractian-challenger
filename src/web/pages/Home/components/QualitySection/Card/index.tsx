import Image from "next/image";

import { Container, ImgContainer } from "./styles";

interface CardProps {
	alt: string;
	src: string;
	message: string;
	colorOne: string;
	colorTwo: string;
}
export const Card = ({ alt, src, message, colorOne, colorTwo }: CardProps) => {
	return (
		<Container colorOne={colorOne} colorTwo={colorTwo}>
			<ImgContainer>
				<Image src={src} alt={alt} width="32" height="32" />
			</ImgContainer>

			<span>{message}</span>
		</Container>
	);
};
