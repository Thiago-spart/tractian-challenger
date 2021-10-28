import { ReactNode } from "react";

import { Container, TextContainer } from "./styles";

interface DropdownItemProps {
	title: string;
	subTitle: string;
	icon: ReactNode;
	handleSelect: () => void;
}

export const DropdownItem = ({ handleSelect, icon, subTitle, title }: DropdownItemProps) => {
	return (
		<Container onClick={handleSelect}>
			{icon}
			<TextContainer>
				<h4>{title}</h4>
				<p>{subTitle}</p>
			</TextContainer>
		</Container>
	);
};
