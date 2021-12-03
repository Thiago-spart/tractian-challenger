import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Home } from "web/pages/Home";

import { i18n } from "configs/i18n";

import { LayoutsEnum } from "types/enums/layout";

Home.layout = LayoutsEnum.NONE;

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || i18n.defaultLocale, ["header", "home", "footer"])),
		},
	};
};
