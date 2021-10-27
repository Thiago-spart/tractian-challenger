import { NextPage } from "next";
import { useTranslation } from "react-i18next";

import React from "react";

import { Title } from "src/components/common";
import User from "src/components/User";

const UserPage: NextPage = () => {
	const { t } = useTranslation();

	return (
		<div>
			<Title>{t("user.title")}</Title>
			<User />
		</div>
	);
};
export default UserPage;
