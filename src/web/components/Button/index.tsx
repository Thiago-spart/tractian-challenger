import type { ButtonProps } from "./types";

import * as S from "./styles";

export const Button = ({
	schema = "primary",
	isFullWidth,
	children,
	type,
	...rest
}: ButtonProps) => {
	return (
		<S.ButtonStyle type={type} schema={schema} isFullWidth={isFullWidth} {...rest}>
			{children}
		</S.ButtonStyle>
	);
};
