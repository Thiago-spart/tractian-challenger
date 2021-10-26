import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enUS from "./locales/en_US.json";
import ptBR from "./locales/pt_BR.json";

i18n.use(initReactI18next).init({
	lng: "pt_BR",
	fallbackLng: "pt_BR",
	resources: {
		pt_BR: {
			translation: ptBR,
		},
		en_US: {
			translation: enUS,
		},
	},
	debug: false,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
