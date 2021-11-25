import Image from "next/image";

import { Container } from "./styles";

interface CardProps {
	alt: string;
	src: string;
}
// Layout="fill" objectFit="initial"
export const Card = ({ alt, src }: CardProps) => {
	return (
		<Container>
			<Image src={src} alt={alt} width="auto" height="100" objectFit="contain" />
		</Container>
	);
};
