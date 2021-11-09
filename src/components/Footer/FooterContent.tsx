import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const FooterContent = [
	{
		type: "link",
		title: "SOBRE A TRACTIAN",
		links: [
			{
				name: "Trabalhe conosco",
				path: "#",
			},
			{
				name: "Conheça a Tractian",
				path: "#",
			},
			{
				name: "Histórias de Sucesso",
				path: "#",
			},
			{
				name: "Imprensa",
				path: "#",
			},
			{
				name: "Política de Privacidade",
				path: "#",
			},
		],
	},
	{
		type: "link",
		title: "PRODUTO",
		links: [
			{
				name: "Sensor Tractian",
				path: "#",
			},
			{
				name: "Plataforma",
				path: "#",
			},
			{
				name: "Funcionalidades",
				path: "#",
			},
			{
				name: "Planos",
				path: "#",
			},
		],
	},
	{
		type: "link",
		title: "MATERIAIS",
		links: [
			{
				name: "Intensivão",
				path: "#",
			},
			{
				name: "Calculadora",
				path: "#",
			},
			{
				name: "Checklists",
				path: "#",
			},
			{
				name: "Guias e Ebooks",
				path: "#",
			},
		],
	},
	{
		type: "link",
		title: "FALE CONOSCO",
		links: [
			{
				name: "Contato",
				path: "#",
			},
			{
				name: "Fale com o CEO",
				path: "#",
			},
		],
	},
	{
		type: "img",
		title: "INVESTIDOS POR",
		images: [
			{
				urlPath: "/logo-ycombinator-branca.png",
				alt: "Combinator",
				linkPath: "#",
				width: 120,
				height: 40,
			},
			{
				urlPath: "/logo-dfg-branca.png",
				alt: "DGF Investimentos",
				linkPath: "#",
				width: 120,
				height: 40,
			},
		],
	},
	{
		type: "img",
		title: "RECONHECIMENTO",
		images: [
			{
				urlPath: "/logo-gptw.png",
				alt: "Great Place To Work",
				linkPath: "#",
				width: 60,
				height: 60,
			},
			{
				urlPath: "/logo-stw.png",
				alt: "100 Startups to match 2021",
				linkPath: "#",
				width: 60,
				height: 60,
			},
		],
	},
	{
		type: "social",
		title: "CONECTE-SE COM A TRACTIAN",
		socialMedia: [
			{
				urlPath: "https://www.linkedin.com",
				description: "Linkedin",
				icon: <FaLinkedinIn />,
			},
			{
				urlPath: "https://www.facebook.com",
				description: "Facebook",
				icon: <FaFacebookF />,
			},
			{
				urlPath: "https://www.instagram.com",
				description: "Instagram",
				icon: <FaInstagram />,
			},
			{
				urlPath: "https://www.youtube.com",
				description: "Youtube",
				icon: <FaYoutube />,
			},
		],
		copyRight: {
			message: "© Tractian Tecnologia Ltda",
			cnpj: "CNPJ: 35.755.699/0001-84",
		},
	},
];
