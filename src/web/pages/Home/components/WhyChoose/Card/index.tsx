import type { CardProps } from "./types";

import * as S from "./styles";

export const Card = ({ imgAlt, imgSrc, text, title }: CardProps) => {
	return (
		<S.Container>
			<S.ImgContainer alt={imgAlt} src={imgSrc} width="70" height="80" />

			<h4>{title}</h4>
			<p>{text}</p>
		</S.Container>
	);
};
