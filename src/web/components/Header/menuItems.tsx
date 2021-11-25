import { FiCheckCircle } from "react-icons/fi";
import { GrAppsRounded } from "react-icons/gr";
import {
	HiOutlineCursorClick,
	HiOutlineEye,
	HiOutlineShieldCheck,
	HiOutlineMailOpen,
	HiOutlineCurrencyDollar,
} from "react-icons/hi";
import { ImArrowUpRight2 } from "react-icons/im";
import {
	MdOutlineBook,
	MdOutlineSpaceDashboard,
	MdPlayCircleOutline,
	MdSensors,
} from "react-icons/md";

export const Items = [
	{
		pathname: "/product",
		type: "dropdown",
		placeholder: "Conheça o Produto",
		actions: [
			{
				handleSelect: () => {},
				title: "Sensor Tractian",
				subTitle: "Análise de Vibração e Temperatura em tempo real.",
				icon: <MdSensors />,
			},
			{
				handleSelect: () => {},
				title: "Plataforma",
				subTitle: "Monitore a condição das suas máquinas de qualquer lugar.",
				icon: <HiOutlineCursorClick />,
			},
			{
				handleSelect: () => {},
				title: "Funcionalidade",
				subTitle: "Saúde do Ativo, Ordens de Serviço, Insights Automáticos e muito mais.",
				icon: <HiOutlineShieldCheck />,
			},
			{
				handleSelect: () => {},
				title: "Planos",
				subTitle: "Saiba como obter nossa solução.",
				icon: <GrAppsRounded />,
			},
		],
		footer: [
			{
				handleSelect: () => {},
				message: "Agende uma Demonstração",
				icon: <MdPlayCircleOutline />,
			},
		],
	},
	{
		pathname: "/about",
		type: "dropdown",
		placeholder: "Sobre nós",
		actions: [
			{
				handleSelect: () => {},
				title: "Conheça a Tractian",
				subTitle:
					"Conheça mais sobre a equipe que faz acontecer o produto, nossa história e vagas abertas.",
				icon: <HiOutlineEye />,
			},
			{
				handleSelect: () => {},
				title: "Histórias de Sucesso",
				subTitle: "Saiba como nossa solução melhora o dia a dia dos profissionais da manutenção.",
				icon: <ImArrowUpRight2 />,
			},
			{
				handleSelect: () => {},
				title: "Contato",
				subTitle:
					"Entre em contato para tirar dúvidas, conhecer de perto nossa solução e enviar sugestões.",
				icon: <HiOutlineMailOpen />,
			},
			{
				handleSelect: () => {},
				title: "Trabalhe Conosco",
				subTitle: "Venha participar da Startup para Indústria mais promissora do Brasil.",
				icon: <MdOutlineSpaceDashboard />,
			},
			{
				handleSelect: () => {},
				title: "Imprensa",
				subTitle: "Veja o que os principais veículos de informação falam sobre a Tractian.",
				icon: <MdOutlineSpaceDashboard />,
			},
		],
	},
	{
		pathname: "/freeResources",
		type: "dropdown",
		placeholder: "Material gratuito",
		actions: [
			{
				handleSelect: () => {},
				title: "Guias",
				subTitle: "Obtenha os melhores guias para manutenção gratuitamente.",
				icon: <MdOutlineBook />,
			},
			{
				handleSelect: () => {},
				title: "Checklists",
				subTitle: "Baixe nossos checklists gratuitos e evite problemas no seu time de manutenção.",
				icon: <FiCheckCircle />,
			},
			{
				handleSelect: () => {},
				title: "Calculadora ROI",
				subTitle:
					"Qual o peso da sua máquina no seu bolso? Veja se vale a pena trocar para a solução da Tractian.",
				icon: <HiOutlineCurrencyDollar />,
			},
		],
		footer: [
			{
				handleSelect: () => {},
				type: "text",
				message: "Últimos materiais",
			},
			{
				handleSelect: () => {},
				type: "link",
				message: "Em busca do downtime zero.",
			},
			{
				handleSelect: () => {},
				type: "link",
				message: "Guia Completo Indicadores da Manutenção.",
			},
			{
				handleSelect: () => {},
				type: "link",
				message: "Ver todos",
			},
		],
	},
	{
		pathname: "/blog",
		type: "button",
		placeholder: "Blog",
	},
	{
		pathname: "/client",
		type: "button",
		placeholder: "Área do cliente",
	},
];
