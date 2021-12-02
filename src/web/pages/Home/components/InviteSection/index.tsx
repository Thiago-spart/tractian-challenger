import { useTranslation } from "next-i18next";
import Image from "next/image";

import { HiArrowRight } from "react-icons/hi";

import { NextLink } from "web/components/Link";

import { Card, Container, BlogList, ImgContainer } from "./styles";

export const InviteSection: React.FC = () => {
	const { t } = useTranslation("home");

	return (
		<Container>
			<Card>
				<h2>{t("inviteSection.blog.title")}</h2>

				<BlogList>
					<li>
						<NextLink href="#">{t("inviteSection.blog.firstBlog")}</NextLink>
					</li>
					<li>
						<NextLink href="#">{t("inviteSection.blog.secondBlog")}</NextLink>
					</li>
					<li>
						<NextLink href="#">{t("inviteSection.blog.thirdBlog")}</NextLink>
					</li>
				</BlogList>

				<NextLink href="#">
					<p>
						{t("inviteSection.blog.inviteLink")} <HiArrowRight />
					</p>
				</NextLink>
			</Card>
			<Card>
				<h2>{t("inviteSection.makePart.title")} 🧢</h2>

				<p>{t("inviteSection.makePart.subTitle")}</p>

				<NextLink href="#">
					<p>
						{t("inviteSection.makePart.inviteLink")} <HiArrowRight />
					</p>
				</NextLink>

				<ImgContainer>
					<Image src="/leo-e-mih.png" alt="employees" width="400" height="300" objectFit="fill" />
				</ImgContainer>
			</Card>
		</Container>
	);
};
