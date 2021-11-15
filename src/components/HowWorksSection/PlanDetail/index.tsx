import Image from "next/image";

import { useState } from "react";

import { Container, DetailList, DetailItem, NumberBall } from "./styles";

interface TextProps {
	title: string;
	subTitle: string;
	imgSrc: string;
}

interface PlanDetailProps {
	content: Array<TextProps>;
	isBlack?: boolean;
}

export const PlanDetail = ({ content, isBlack = false }: PlanDetailProps) => {
	const [selected, setSelected] = useState("1");
	const equal = 1;

	return (
		<Container isBlack={isBlack}>
			<DetailList>
				{content.map((item, index) => {
					return (
						<DetailItem
							isBlack={isBlack}
							active={Number(selected) - equal === index}
							key={item.title}
							onClick={() => setSelected(String(index + equal))}
						>
							<NumberBall isBlack={isBlack} active={Number(selected) - equal === index}>
								<span>{index + equal}</span>
							</NumberBall>
							<div>
								<h3>{item.title}</h3>
								<p>{item.subTitle}</p>
							</div>
						</DetailItem>
					);
				})}
			</DetailList>

			<Image
				src={content[Number(selected) - equal].imgSrc}
				alt={content[Number(selected) - equal].title}
				width="700"
				height="500"
				objectFit="contain"
			/>
		</Container>
	);
};
