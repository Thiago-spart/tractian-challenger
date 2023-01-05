import Image from "next/image";

import { Primary } from "web/components/Button/Primary";

import * as S from "./styles";

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
		<S.Container>
			<Image src={imgSrc} alt={imgAlt} width={200} height={150} />
			<h4>{title}</h4>
			<p>{text}</p>

			<Primary message={buttonMessage} />
		</S.Container>
	);
};
