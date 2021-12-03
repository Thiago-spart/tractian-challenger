import { ReactNode } from "react";

import { Container } from "./styles";

interface DropdownFooterProps {
	message: string;
	icon?: ReactNode;
	handleSelect: () => void;
	type?: string;
}

export const DropdownFooter = ({ handleSelect, message, icon }: DropdownFooterProps) => {
	return (
		<Container onClick={handleSelect}>
			<p>
				{icon !== undefined && icon} {message}
			</p>
		</Container>
	);
};
