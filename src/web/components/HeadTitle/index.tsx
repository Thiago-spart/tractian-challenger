import Head from "next/head";

interface HeadTitleProps {
	title: string;
}

export const HeadTitle = ({ title }: HeadTitleProps) => (
	<Head>
		<title>{title} | Tractian</title>
	</Head>
);
