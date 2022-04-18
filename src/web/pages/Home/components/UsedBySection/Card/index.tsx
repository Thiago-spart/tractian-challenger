import { Container } from "./styles";

interface CardProps {
	alt: string;
	src: string;
}
// Layout="fill" objectFit="initial"
export const Card = ({ alt, src }: CardProps) => {
	return (
		<Container>
			<img src={src} alt={alt} />
		</Container>
	);
};
