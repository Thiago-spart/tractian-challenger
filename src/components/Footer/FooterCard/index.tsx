import Image from "next/image";

import { ReactNode } from "react";

import { NextLink } from "src/components/Link";

import { Card, Title, LinkContainer, SocialContainer, CompanyInfo } from "./styles";

interface LinkProps {
	path: string;
	name: string;
}

interface ImgProps {
	alt: string;
	linkPath: string;
	urlPath: string;
	width: number;
	height: number;
}

interface SocialMediaProps {
	urlPath: string;
	description: string;
	icon: ReactNode;
}

interface FooterCardProps {
	title: string;
	links?: Array<LinkProps>;
	images?: Array<ImgProps>;
	socialMedia?: Array<SocialMediaProps>;
	copyRight?: {
		message: string;
		cnpj: string;
	};
}

export const FooterCard = ({ title, images, links, copyRight, socialMedia }: FooterCardProps) => {
	return (
		<Card>
			<Title>{title}</Title>

			{images !== undefined && (
				<div className="img-container">
					{images.map(image => (
						<NextLink key={image.alt} href={image.urlPath}>
							<Image
								alt={image.alt}
								src={image.urlPath}
								width={image.width}
								height={image.height}
							/>
						</NextLink>
					))}
				</div>
			)}

			{links !== undefined && (
				<LinkContainer>
					{links.map(link => (
						<NextLink href={link.path} key={link.name}>
							{link.name}
						</NextLink>
					))}
				</LinkContainer>
			)}

			{socialMedia !== undefined && copyRight !== undefined && (
				<>
					<SocialContainer>
						{socialMedia.map(item => (
							<NextLink href={item.urlPath} key={item.description}>
								{item.icon}
							</NextLink>
						))}
					</SocialContainer>

					<CompanyInfo>
						<NextLink href={"/"}>
							<span>{copyRight.message}</span>
							<p>{copyRight.cnpj}</p>
						</NextLink>
					</CompanyInfo>
				</>
			)}
		</Card>
	);
};
