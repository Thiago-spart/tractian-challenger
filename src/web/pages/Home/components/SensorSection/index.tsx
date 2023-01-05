import { useTranslation } from "next-i18next";

import { useState } from "react";

import * as S from "./styles";

import { SwitchContent } from "./SwitchContent";

export const SensorSection: React.FC = () => {
	const { t } = useTranslation("home");
	const [selectedOption, setSelectedOption] = useState("1");

	const Content = [
		{
			imgSrc: "/switch/cole-o-sensor.png",
			title: t("sensorSection.sections.plugPlaySensor.title"),
			text: t("sensorSection.sections.plugPlaySensor.text"),
		},
		{
			imgSrc: "/switch/features-header.png",
			title: t("sensorSection.sections.onlineMonitoring.title"),
			text: t("sensorSection.sections.onlineMonitoring.text"),
		},
		{
			imgSrc: "/switch/automacoes-e-metricas.png",
			title: t("sensorSection.sections.assetManagement.title"),
			text: t("sensorSection.sections.assetManagement.text"),
		},
	];

	return (
		<S.Container>
			<S.ContentContainer>
				<h3>{t("sensorSection.title")}</h3>
				<p>
					{t("sensorSection.subTitle")} <span>{t("sensorSection.subTitleHighlight")}</span>
				</p>

				<S.OptionsList>
					<S.OptionItem onClick={() => setSelectedOption("1")} selected={selectedOption === "1"}>
						<p>
							<span>01</span> {t("sensorSection.options.plugPlay")}
						</p>
					</S.OptionItem>
					<S.OptionItem onClick={() => setSelectedOption("2")} selected={selectedOption === "2"}>
						<p>
							<span>02</span> {t("sensorSection.options.onlineMonitoring")}
						</p>
					</S.OptionItem>
					<S.OptionItem onClick={() => setSelectedOption("3")} selected={selectedOption === "3"}>
						<p>
							<span>03</span> {t("sensorSection.options.assetManagement")}
						</p>
					</S.OptionItem>
				</S.OptionsList>
			</S.ContentContainer>

			{Content.map((item, index) => {
				const equal = 1;

				return (
					index + equal === Number(selectedOption) && (
						<SwitchContent
							imgAlt={item.title}
							imgSrc={item.imgSrc}
							text={item.text}
							title={item.title}
							key={item.title}
							buttonMessage={t("sensorSection.buttonMessage")}
						/>
					)
				);
			})}
		</S.Container>
	);
};
