import { Primary } from "../../../../components/Button/Primary";

import { Container, Title, FormContainer, FormGroup } from "./styles";

export const HomeForm = () => {
	return (
		<Container>
			<Title>Melhore os seus processos de manutenção</Title>

			<p>Preencha o formulário para uma demonstração.</p>

			<FormContainer>
				<FormGroup>
					<label htmlFor="name">
						Nome
						<input name="name" type="text" placeholder="Insira seu nome" />
					</label>
				</FormGroup>

				<FormGroup>
					<label htmlFor="position">
						Cargo
						<input type="text" name="position" placeholder="Insira seu cargo" />
					</label>
				</FormGroup>

				<FormGroup>
					<label htmlFor="email">
						E-mail profissional
						<input type="email" name="email" placeholder="Insira seu e-mail profissional" />
					</label>
				</FormGroup>

				<FormGroup>
					<label htmlFor="clientPhone">
						Telefone
						<input
							type="tel"
							name="phone"
							placeholder="(XXX) XXXX-XXXX"
							pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
						/>
					</label>
				</FormGroup>

				<FormGroup>
					<span>Quantidade de pontos monitorados:</span>
					<input type="checkbox" name="ten-to-twenty" />
					<label htmlFor="ten-to-twenty"> 10 a 20</label>

					<input type="checkbox" name="twenty-one-to-thirty" />
					<label htmlFor="twenty-one-to-thirty"> 21 a 30</label>

					<input type="checkbox" name="thirty-one-to-fifth" />
					<label htmlFor="thirty-one-to-fifth"> 31 a 50</label>

					<input type="checkbox" name="more-than-fifth" />
					<label htmlFor="more-than-fifth"> Mais de 50</label>
				</FormGroup>

				<Primary message="Enviar" />
			</FormContainer>
		</Container>
	);
};
