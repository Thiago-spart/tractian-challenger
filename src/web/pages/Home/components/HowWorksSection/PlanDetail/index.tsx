import { useState } from "react";

import type { PlanDetailProps } from "./types";

import * as S from "./styles";

export const PlanDetail = ({ content, isDark = false }: PlanDetailProps) => {
	const [selected, setSelected] = useState("1");

	const equal = 1;

	return (
		<S.Container isDark={isDark}>
			<S.DetailList>
				{content.map((item, index) => {
					return (
						<S.DetailItem
							isDark={isDark}
							active={Number(selected) - equal === index}
							key={item.title}
							onClick={() => setSelected(String(index + equal))}
						>
							<S.NumberBall isDark={isDark} active={Number(selected) - equal === index}>
								<span>{index + equal}</span>
							</S.NumberBall>
							<div>
								<h3>{item.title}</h3>
								<p>{item.subTitle}</p>
							</div>
						</S.DetailItem>
					);
				})}
			</S.DetailList>

			<S.ProductImage
				src={content[Number(selected) - equal].imgSrc}
				alt={content[Number(selected) - equal].title}
				width="700"
				height="500"
			/>
		</S.Container>
	);
};
