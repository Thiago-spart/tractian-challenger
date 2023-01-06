export interface TextProps {
	title: string;
	subTitle: string;
	imgSrc: string;
}

export interface PlanDetailProps {
	content: Array<TextProps>;
	isDark?: boolean;
}
