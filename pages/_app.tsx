import { AppProps } from "next/app";

import React, { FC } from "react";

import { Layout } from "src/components/Layout";

import { GlobalBaseStyle } from "src/styles/GlobalBaseStyle";

import "src/i18n";

import "antd/dist/antd.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Layout>
			<GlobalBaseStyle />
			<Component {...pageProps} />
		</Layout>
	);
};
export default App;
