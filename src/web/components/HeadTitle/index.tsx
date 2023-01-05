import Head from "next/head";

import type { HeadTitleProps } from "./types";

export const HeadTitle = ({ title }: HeadTitleProps) => (
	<Head>
		<title>TRACTIAN | {title}</title>
	</Head>
);
