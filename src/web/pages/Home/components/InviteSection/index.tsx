import Image from "next/image";

import { HiArrowRight } from "react-icons/hi";

import { NextLink } from "web/components/Link";

import { Card, Container, BlogList, ImgContainer } from "./styles";

export const InviteSection = () => {
	return (
		<Container>
			<Card>
				<h2>Novidades no Blog</h2>

				<BlogList>
					<li>
						<NextLink href="#">Como selecionar os ativos para o monitoramento online?</NextLink>
					</li>
					<li>
						<NextLink href="#">
							Saiba como a Ahlstrom Munksjo mudou sua rotina de manutenção
						</NextLink>
					</li>
					<li>
						<NextLink href="#">
							TRACTIAN é nomeada solução favorita de CMMS e OEE no ranking da Capterra 2021
						</NextLink>
					</li>
				</BlogList>

				<NextLink href="#">
					<p>
						Ir para o blog <HiArrowRight />
					</p>
				</NextLink>
			</Card>
			<Card>
				<h2>Faça parte do time! 🧢</h2>

				<p>Confira as posições abertas e venha fazer parte de um time de alta performance</p>

				<NextLink href="#">
					<p>
						Veja nossas vagas <HiArrowRight />
					</p>
				</NextLink>

				<ImgContainer>
					<Image src="/leo-e-mih.png" alt="employees" width="400" height="300" objectFit="fill" />
				</ImgContainer>
			</Card>
		</Container>
	);
};
