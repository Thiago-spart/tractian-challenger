import { ReactNode, useState } from "react";

import { Footer } from "web/components/Footer";
import { Header } from "web/components/Header";
import { MobileMenu } from "web/components/MobileMenu";

import { Main } from "./styles";

interface Props {
	children: ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({children}) => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const openModal = () => {
		setIsOpenModal(true);
	};

	const closeModal = () => {
		setIsOpenModal(false);
	};

	return (
		<>
			<Header isModalOpen={openModal} />
			<MobileMenu isOpen={isOpenModal} onRequestClose={closeModal} />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};
