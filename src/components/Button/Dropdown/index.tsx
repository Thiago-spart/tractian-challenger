import { ReactNode, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

import { Container, Title, Wrapper } from "./styles";

import { DropdownItem } from "./DropdownItem";

interface ActionProps {
	title: string;
	subTitle: string;
	icon: ReactNode;
	handleSelect: () => void;
}

interface OutlinedProps {
	actions: Array<ActionProps>;
	placeholder: string;
	width?: number;
	disabled?: boolean;
}

export const Dropdown = ({ width, actions, placeholder, disabled = false }: OutlinedProps) => {
	const [open, setOpen] = useState(false);

	return (
		<Container open={open} onClick={() => setOpen(!open)} disabled={disabled} width={width}>
			<Title>{placeholder}</Title>

			<AiOutlineDown />

			<Wrapper open={open} width={width}>
				{actions.map(action => (
					<DropdownItem
						key={action.title}
						handleSelect={action.handleSelect}
						title={action.title}
						subTitle={action.subTitle}
						icon={action.icon}
					/>
				))}
			</Wrapper>
		</Container>
	);
};
