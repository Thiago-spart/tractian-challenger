import { Card, Container, Title, CardContainer } from "./styles";

export const Percentage = () => {
	return (
		<Container>
			<Title>Suas máquinas mais seguras.</Title>

			<CardContainer>
				<Card>
					<h6>90%</h6>
					<p>DE ASSERTIVIDADE DOS INSIGHTS GERADOS PELA PLATAFORMA.</p>
				</Card>
				<Card>
					<h6>45%</h6>
					<p>AUMENTO DE CONFIABILIDADE DAS MÁQUINAS COM SISTEMA TRACTIAN.</p>
				</Card>
				<Card>
					<h6>30%</h6>
					<p>REDUÇÃO DAS OCORRÊNCIAS DE ÚLTIMA HORA NA MANUTENÇÃO.</p>
				</Card>
			</CardContainer>
		</Container>
	);
};
