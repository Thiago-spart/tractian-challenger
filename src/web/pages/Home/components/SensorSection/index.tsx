import { useTranslation } from "next-i18next";

import { useState } from "react";

import { Primary } from "web/components/Button/Primary";

import { Container, Options, SubTitle, Title, ContentContainer, Option } from "./styles";

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
		<Container>
			<ContentContainer>
				<Title>{t("sensorSection.title")}</Title>
				<SubTitle>
					{t("sensorSection.subTitle")} <span>{t("sensorSection.subTitleHighlight")}</span>
				</SubTitle>
				<Options>
					<Option onClick={() => setSelectedOption("1")} selected={selectedOption === "1"}>
						<p>
							<span>01</span> {t("sensorSection.options.plugPlay")}
						</p>
					</Option>
					<Option onClick={() => setSelectedOption("2")} selected={selectedOption === "2"}>
						<p>
							<span>02</span> {t("sensorSection.options.onlineMonitoring")}
						</p>
					</Option>
					<Option onClick={() => setSelectedOption("3")} selected={selectedOption === "3"}>
						<p>
							<span>03</span> {t("sensorSection.options.assetManagement")}
						</p>
					</Option>
				</Options>

				<Primary message={t("sensorSection.buttonMessage")} />
			</ContentContainer>

			{Content.map((item, index) => {
				const equal = 1;

				return (
					index + equal === Number(selectedOption) && (
						<SwitchContent
							imgAlt={item.title.toLowerCase()}
							imgSrc={item.imgSrc}
							text={item.text}
							title={item.title}
							key={item.title}
						/>
					)
				);
			})}
		</Container>
	);
};
