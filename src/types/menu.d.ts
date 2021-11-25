import { ReactNode } from "react";

export interface ActionsProps {
	handleSelect: () => void;
	title: string;
	subTitle: string;
	icon: ReactNode;
}

export interface FooterProps {
	handleSelect: () => void;
	message: string;
	type: string;
	icon?: ReactNode;
}

export interface ItemProps {
	placeholder: string;
	pathname?: string;
	type: string;
	actions?: Array<ActionsProps>;
	footer?: Array<FooterProps>;
}
