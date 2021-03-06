// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
	// DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

// import { ServerStyleSheet } from "styled-components";

import { HeadContent } from "../web/components/HeadContent";

import enUSSystem from "../assets/locales/en-US/common.json";
import esESSystem from "../assets/locales/es-ES/common.json";
import ptBRSystem from "../assets/locales/pt-BR/common.json";

import { i18n } from "../configs/i18n";

import type { GetSystemInformationResult } from "types/interfaces/system";

const getSystemInformation = (locale: string): GetSystemInformationResult => {
	switch (locale) {
		case "pt-BR":
			return ptBRSystem as GetSystemInformationResult;
		case "es-ES":
			return esESSystem as GetSystemInformationResult;
		case "en-US":
		default:
			return enUSSystem as GetSystemInformationResult;
	}
};

export default class MyDocument extends Document {
	// public static async getInitialProps(ctx: DocumentContext) {
	// 	const sheet = new ServerStyleSheet();
	// 	const originalRenderPage = ctx.renderPage;

	// 	try {
	// 		ctx.renderPage = () =>
	// 			originalRenderPage({
	// 				enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
	// 			});

	// 		const initialProps = await Document.getInitialProps(ctx);

	// 		return {
	// 			...initialProps,
	// 			styles: (
	// 				<>
	// 					{initialProps.styles}
	// 					{sheet.getStyleElement()}
	// 				</>
	// 			),
	// 		};
	// 	} finally {
	// 		sheet.seal();
	// 	}
	// }

	public render() {
		const { locale } = this.props.__NEXT_DATA__;
		const { system } = getSystemInformation(locale || i18n.defaultLocale);

		return (
			<Html lang={system.lang}>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
						rel="stylesheet"
					/>
					<HeadContent ogLocale={system.ogLocale} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
