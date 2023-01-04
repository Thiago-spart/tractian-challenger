import type { ButtonHTMLAttributes } from "react";

import type { WithChildren } from "@interfaces/withChildren";

export type ButtonSchemaProps = "primary" | "secondary";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	WithChildren & {
		schema?: ButtonSchemaProps;
		isFullWidth?: boolean;
		// FontSize?: "SM" | "XS";
	};

export interface ButtonStyleProps {
	schema: ButtonSchemaProps;
	isFullWidth?: boolean;
	// FontSize: "SM" | "XS";
}
