import Image from "next/image";

import { MdClose } from "react-icons/md";
import Modal from "react-modal";

import { Container, ImgContainer, InviteBlock, SeparatorLine } from "./styles";

import { Secondary } from "../Button/Secondary";
import { NavMenu } from "../Header/NavMenu";

interface MobileMenuProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export const MobileMenu = ({ isOpen, onRequestClose }: MobileMenuProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<div className="react-modal-close" onClick={onRequestClose}>
				<MdClose />
			</div>
			<Container>
				<ImgContainer>
					<Image src="/logotractianazul.svg" alt="Logo da tractian" width="100" height="30" />
				</ImgContainer>
				<NavMenu />
				<SeparatorLine />

				<Secondary message="Demonstração" allWidth />

				<InviteBlock>
					<p>
						Ainda não é cliente? <span>fale conosco</span>
					</p>
				</InviteBlock>
			</Container>
		</Modal>
	);
};
