import { useState } from "react";

import { Container, SubTitle, Switch, Title, Button } from "./styles";

import { Plans } from "./content";
import { PlanDetail } from "./PlanDetail";

export const HowWorksSection = () => {
	const onlineMonitoring = 0;
	const assetManagement = 1;

	const [selected, setSelected] = useState("1");

	return (
		<Container>
			<Title>Como funciona?</Title>
			<SubTitle>Combine monitoramento e gestão, escolha:</SubTitle>
			<Switch>
				<Button type="button" onClick={() => setSelected("1")} active={selected === "1"}>
					Monitoramento online
				</Button>
				<Button type="button" dark onClick={() => setSelected("2")} active={selected === "2"}>
					Gestão de ativos
				</Button>
			</Switch>

			{selected === "1" && <PlanDetail content={Plans[onlineMonitoring].content} />}

			{selected === "2" && <PlanDetail content={Plans[assetManagement].content} isBlack />}
		</Container>
	);
};
