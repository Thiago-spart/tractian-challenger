import { AppProps } from "next/app";

import React, { FC } from "react";
import Modal from "react-modal";

import { Layout } from "src/components/Layout";

import { GlobalBaseStyle } from "src/styles/GlobalBaseStyle";

import "src/i18n";

import "antd/dist/antd.css";

// Modal.setAppElement("#root");

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Layout>
			<GlobalBaseStyle />
			<Component {...pageProps} />
		</Layout>
	);
};
export default App;
