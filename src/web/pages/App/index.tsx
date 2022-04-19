import type { AppProps } from "next/app";
import { Router } from "next/router";

import React, { useEffect } from "react";

import { Head } from "./components/Head";

import { setGtmPageView } from "utils/gtm";

import { LayoutWrapper } from "web/layouts/wrapper";

import { GlobalBaseStyle } from "./styles";

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	useEffect(() => {
		const handleRouteChange = (url: string) => setGtmPageView(url);

		Router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			Router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, []);

	return (
		<>
			<Head />
			<LayoutWrapper>
				<Component {...pageProps} />
			</LayoutWrapper>
			<GlobalBaseStyle />
		</>
	);
};
