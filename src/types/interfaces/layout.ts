import type { LayoutsEnum } from "../enums/layout";

export interface Layout {
	layout?: LayoutsEnum;
}

export type FCWithLayout = React.FC & Layout;
