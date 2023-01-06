import Image from "next/image";

import { MdStarRate } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";

import type { CardProps } from "./types";

import * as S from "./styles";

export const Card = ({ imgSrc, profileJob, profileName, quote }: CardProps) => {
	return (
		<S.Container>
			<S.QuoteContainer>
				<RiDoubleQuotesL />
			</S.QuoteContainer>

			<q>{quote}</q>

			<S.ReviewerStars>
				<MdStarRate />
				<MdStarRate />
				<MdStarRate />
				<MdStarRate />
				<MdStarRate />
			</S.ReviewerStars>

			<S.ReviewerProfile>
				<Image src={imgSrc} alt={profileName} width="50" height="50" objectFit="cover" />

				<span>
					<cite>{profileName}</cite>
					<p>{profileJob}</p>
				</span>
			</S.ReviewerProfile>
		</S.Container>
	);
};
