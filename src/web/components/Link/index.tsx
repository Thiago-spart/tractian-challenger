import Link, { LinkProps as NextLinkProps } from "next/link";

import React, { FC, MouseEvent, AnchorHTMLAttributes, ReactNode } from "react";

import { isExternalLink } from "utils/isExternalLink";

export interface Props
	extends NextLinkProps,
		Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target"> {
	openInNewTab?: boolean;
	title?: string;
	onClick?: (e: MouseEvent) => void;
	className?: string;
  children: ReactNode;
}

export const NextLink: FC<Props> = ({
	href,
	title,
	target,
	onClick,
	className,
	children,
	...restProps
}) => {
	const openInNewTab = target === "_blank";
	const isExternal = isExternalLink(href);
	const rel = openInNewTab ? "noreferrer noopener" : undefined;

	const handleClick = (e: MouseEvent) => {
		if (onClick) {
			onClick(e);
		}
	};

	if (isExternal || openInNewTab) {
		return (
			<a
				className={className}
				href={href as string}
				title={title}
				target={target}
				rel={rel}
				onClick={handleClick}
			>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} {...restProps}>
			<a onClick={handleClick}>{children}</a>
		</Link>
	);
};
