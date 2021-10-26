import { NextPage } from "next";
import { useTranslation } from "react-i18next";

import React from "react";

import styled from "styled-components";

import { Button } from "antd";

import { Title } from "src/components/common";
import { NextLink } from "src/components/Link";

const CoreTitle = styled(Title)`
	margin: 40px 0;
	font-weight: 700;
`;

const LinkButton = styled(Button)`
	margin-right: 20px;
`;

const Home: NextPage = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = () => {
		i18n.changeLanguage(i18n.language === "pt_BR" ? "en_US" : "pt_BR");
	};

	return (
		<div>
			<CoreTitle>Nextjs-TS-Antd-Redux-Storybook-Jest-Starter</CoreTitle>
			<LinkButton>
				<NextLink href="/user">{t("home.user")}</NextLink>
			</LinkButton>
			<LinkButton>
				<NextLink href="/articles">{t("home.articles")}</NextLink>
			</LinkButton>
			<Button onClick={changeLanguage}>{t("home.change_lang")}</Button>
		</div>
	);
};
export default Home;
