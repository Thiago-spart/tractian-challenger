import { useTranslation } from "next-i18next";

import { HiArrowRight } from "react-icons/hi";

import { NextLink } from "web/components/Link";

import * as S from "./styles";

export const InviteSection: React.FC = () => {
	const { t } = useTranslation("home");

	return (
		<S.Container>
			<S.Card>
				<h2>{t("inviteSection.blog.title")}</h2>

				<S.BlogList>
					<li>
						<NextLink href="#">{t("inviteSection.blog.firstBlog")}</NextLink>
					</li>
					<li>
						<NextLink href="#">{t("inviteSection.blog.secondBlog")}</NextLink>
					</li>
					<li>
						<NextLink href="#">{t("inviteSection.blog.thirdBlog")}</NextLink>
					</li>
				</S.BlogList>

				<NextLink href="#">
					{t("inviteSection.blog.inviteLink")} <HiArrowRight />
				</NextLink>
			</S.Card>
			<S.Card>
				<h2>{t("inviteSection.makePart.title")} 🧢</h2>

				<p>{t("inviteSection.makePart.subTitle")}</p>

				<NextLink href="#">
					{t("inviteSection.makePart.inviteLink")} <HiArrowRight />
				</NextLink>

				<S.ImgContainer src="/leo-e-mih.png" alt="employees" width="400" height="300" />
			</S.Card>
		</S.Container>
	);
};
