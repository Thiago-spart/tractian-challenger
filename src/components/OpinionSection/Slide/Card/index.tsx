import Image from "next/image";

import { MdStarRate } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";

import { Container, QuoteContainer, ReviewerStars, ReviewerProfile } from "./styles";

interface CardProps {
	quote: string;
	imgSrc: string;
	profileName: string;
	profileJob: string;
}

export const Card = ({ imgSrc, profileJob, profileName, quote }: CardProps) => {
	return (
		<Container>
			<QuoteContainer>
				<RiDoubleQuotesL />
			</QuoteContainer>
			<p>{quote}</p>
			<ReviewerStars>
				<MdStarRate />
				<MdStarRate />
				<MdStarRate />
				<MdStarRate />
				<MdStarRate />
			</ReviewerStars>

			<ReviewerProfile>
				<Image src={imgSrc} alt={profileName} width="50" height="50" objectFit="cover" />
				<span>
					<h2>{profileName}</h2>
					<p>{profileJob}</p>
				</span>
			</ReviewerProfile>
		</Container>
	);
};
