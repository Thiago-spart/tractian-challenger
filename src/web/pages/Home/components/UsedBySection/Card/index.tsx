import Image from "next/image";

import type { CardProps } from "./types";

import { Container } from "./styles";

export const Card = ({ alt, src }: CardProps) => {
	return (
		<Container>
			<Image src={src} alt={alt} width={100} height={80} />
		</Container>
	);
};
