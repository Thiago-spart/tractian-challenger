import type { ReactNode } from "react";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { AiOutlineDown } from "react-icons/ai";

import { Container, Title, Wrapper } from "./styles";

import { DropdownFooter } from "./DropdownFooter";
import { DropdownItem } from "./DropdownItem";

interface ActionProps {
	title: string;
	subTitle: string;
	icon: ReactNode;
	handleSelect: () => void;
}

interface DropdownFooterProps {
	message?: string;
	icon?: ReactNode;
	type?: string;
	handleSelect: () => void;
}

interface OutlinedProps {
	actions?: Array<ActionProps>;
	footer?: Array<DropdownFooterProps>;
	placeholder: string;
	width?: number;
	disabled?: boolean;
}

export const Dropdown = ({
	width,
	actions,
	footer,
	placeholder,
	disabled = false,
}: OutlinedProps) => {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};

	return (
		<ClickAwayListener onClickAway={() => setOpen(false)}>
			<Container open={open} disabled={disabled} width={width} onClick={toggleOpen}>
				<Title>{placeholder}</Title>

				<AiOutlineDown />
				<Wrapper open={open} width={width}>
					{actions?.map(action => (
						<DropdownItem
							key={action.title}
							handleSelect={action.handleSelect}
							title={action.title}
							subTitle={action.subTitle}
							icon={action.icon}
						/>
					))}
					{footer?.map(item => (
						<DropdownFooter
							key={item.message}
							message={String(item.message)}
							handleSelect={item.handleSelect}
							icon={item?.icon}
							type={item.type}
						/>
					))}
				</Wrapper>
			</Container>
		</ClickAwayListener>
	);
};
