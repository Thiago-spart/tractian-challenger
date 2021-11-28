import { useRouter } from "next/dist/client/router";

import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { AiOutlineDown } from "react-icons/ai";

import { SwitchButton, SwitchContainer, SwitchOption } from "./styles";

const languages = [
	{
		lang: "pt-BR",
	},
	{
		lang: "en-US",
	},
	{
		lang: "es-ES",
	},
];

export const SwitchLanguageButton: React.FC = () => {
	const { push, locale } = useRouter();
	const [openOptions, setOpenOptions] = useState(false);
	const langLength = -5;
	const selectedLanguage = String(locale?.slice(langLength));

	const toggleOpenOptions = () => {
		setOpenOptions(!openOptions);
	};

	const setLanguage = (currentLanguage: string) => {
		const newPath = String(locale).replace(selectedLanguage, currentLanguage);
		push(newPath);
	};

	return (
		<ClickAwayListener onClickAway={() => setOpenOptions(false)}>
			<SwitchButton isOpen={openOptions} onClick={toggleOpenOptions}>
				{selectedLanguage} <AiOutlineDown />
				<SwitchContainer isOpen={openOptions}>
					{languages
						.filter(item => item.lang !== selectedLanguage)
						.map(option => {
							return (
								<SwitchOption key={option.lang} onClick={() => setLanguage(option.lang)}>
									{option.lang}
								</SwitchOption>
							);
						})}
				</SwitchContainer>
			</SwitchButton>
		</ClickAwayListener>
	);
};
