import { useRouter } from "next/dist/client/router";

import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { AiOutlineDown } from "react-icons/ai";

import { NextLink } from "web/components/Link";

/*
 * Import { system } from "../../../assets/locales/en-US/common.json";
 * import { system } from "../../../assets/locales/pt-BR/common.json";
 */

import { SwitchButton, SwitchContainer, SwitchOption } from "./styles";

const languages = [
	{
		lang: "pt-BR",
	},
	{
		lang: "en-US",
	},
];

export const SwitchLanguageButton: React.FC = () => {
	const { query } = useRouter();
	const [openOptions, setOpenOptions] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState(query.language);

	const toggleOpenOptions = () => {
		setOpenOptions(!openOptions);
	};

	const setLanguage = (currentLanguage: string) => {
		setSelectedLanguage(currentLanguage);
	};

	// Console.log(languages.filter(item => item.lang !== selectedLanguage).map(item => item));

	return (
		<ClickAwayListener onClickAway={() => setOpenOptions(false)}>
			<SwitchButton isOpen={openOptions} onClick={toggleOpenOptions}>
				{selectedLanguage} <AiOutlineDown />
				<SwitchContainer isOpen={openOptions}>
					{languages
						.filter(item => item.lang !== selectedLanguage)
						.map(option => {
							return (
								<NextLink key={option.lang} href={option.lang}>
									<SwitchOption onClick={() => setLanguage(option.lang)}>
										{option.lang}
									</SwitchOption>
								</NextLink>
							);
						})}
				</SwitchContainer>
			</SwitchButton>
		</ClickAwayListener>
	);
};
