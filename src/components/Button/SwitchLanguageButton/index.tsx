import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { AiOutlineDown } from "react-icons/ai";

import { SwitchButton, SwitchContainer, SwitchOption } from "./styles";

interface Option {
	language: string;
}

interface SwitchLanguageButtonProps {
	options: Array<Option>;
	selectedLanguage: string;
}

export const SwitchLanguageButton = ({ selectedLanguage, options }: SwitchLanguageButtonProps) => {
	const [openOptions, setOpenOptions] = useState(false);

	const toggleOpenOptions = () => {
		setOpenOptions(!openOptions);
	};

	return (
		<SwitchButton isOpen={openOptions} onClick={toggleOpenOptions}>
			{selectedLanguage} <AiOutlineDown />
			<ClickAwayListener onClickAway={toggleOpenOptions}>
				<SwitchContainer isOpen={openOptions}>
					{options.map(option => {
						return <SwitchOption key={option.language}>{option.language}</SwitchOption>;
					})}
				</SwitchContainer>
			</ClickAwayListener>
		</SwitchButton>
	);
};
