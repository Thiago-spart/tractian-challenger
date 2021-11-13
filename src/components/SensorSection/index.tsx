import { useState } from "react";

import { Container, Options, SubTitle, Title, ContentContainer, Option } from "./styles";

import { Content } from "./Content";
import { SwitchContent } from "./SwitchContent";

export const SensorSection = () => {
	const [selectedOption, setSelectedOption] = useState("1");

	return (
		<Container>
			<ContentContainer>
				<Title>MANUTENÇÃO PREDITIVA DESCOMPLICADA</Title>
				<SubTitle>
					Mantenha a sua equipe e seus ativos com o <span>melhor desempenho</span>
				</SubTitle>
				<Options>
					<Option onClick={() => setSelectedOption("1")} selected={selectedOption === "1"}>
						<p>
							<span>01</span> Sensor Plug &amp; Play
						</p>
					</Option>
					<Option onClick={() => setSelectedOption("2")} selected={selectedOption === "2"}>
						<p>
							<span>02</span> Monitoramento Online
						</p>
					</Option>
					<Option onClick={() => setSelectedOption("3")} selected={selectedOption === "3"}>
						<p>
							<span>03</span> Gestão de Ativos
						</p>
					</Option>
				</Options>
			</ContentContainer>

			{Content.map((item, index) => {
				const equal = 1;

				return (
					index + equal === Number(selectedOption) && (
						<SwitchContent
							imgAlt={item.imgAlt}
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
