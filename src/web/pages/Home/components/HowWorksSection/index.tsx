import { useTranslation } from "next-i18next";

import { useState } from "react";

import { Container, SubTitle, Switch, Title, Button } from "./styles";

import { PlanDetail } from "./PlanDetail";

export const HowWorksSection: React.FC = () => {
	const { t } = useTranslation("home");
	const onlineMonitoring = 0;
	const assetManagement = 1;

	const [selected, setSelected] = useState("1");

	const Plans = [
		{
			content: [
				{
					title: t("howItWorksSection.sections.shipSensors.title"),
					subTitle: t("howItWorksSection.sections.shipSensors.text"),
					imgSrc: "/planDetails/enviamos-o-sensor.png",
				},
				{
					title: t("howItWorksSection.sections.attachMachine.title"),
					subTitle: t("howItWorksSection.sections.attachMachine.text"),
					imgSrc: "/planDetails/motobomba-periferico.png",
				},
				{
					title: t("howItWorksSection.sections.getInsights.title"),
					subTitle: t("howItWorksSection.sections.getInsights.text"),
					imgSrc: "/planDetails/insights-tela-desalinhamento.png",
				},
			],
		},
		{
			content: [
				{
					title: t("howItWorksSection.sections.sendAssets.title"),
					subTitle: t("howItWorksSection.sections.sendAssets.text"),
					imgSrc: "/planDetails/planos-preventivos.png",
				},
				{
					title: t("howItWorksSection.sections.automateWorkPlans.title"),
					subTitle: t("howItWorksSection.sections.automateWorkPlans.text"),
					imgSrc: "/planDetails/cadastro-os.png",
				},
				{
					title: t("howItWorksSection.sections.replaceExcel.title"),
					subTitle: t("howItWorksSection.sections.replaceExcel.text"),
					imgSrc: "/planDetails/automacoes-e-metricas.png",
				},
			],
		},
	];

	return (
		<Container>
			<Title>{t("howItWorksSection.title")}</Title>
			<SubTitle>{t("howItWorksSection.subTitle")}</SubTitle>

			<Switch>
				<Button type="button" onClick={() => setSelected("1")} active={selected === "1"}>
					{t("howItWorksSection.onlineMonitoring")}
				</Button>
				<Button type="button" dark onClick={() => setSelected("2")} active={selected === "2"}>
					{t("howItWorksSection.assetManagement")}
				</Button>
			</Switch>

			{selected === "1" && <PlanDetail content={Plans[onlineMonitoring].content} />}

			{selected === "2" && <PlanDetail content={Plans[assetManagement].content} isDark />}
		</Container>
	);
};
