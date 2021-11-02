import React, { FC, useState } from "react";

import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

import { MainWrapper } from "./styles";

import { MobileMenu } from "../MobileMenu";

export const Layout: FC = ({ children }) => {
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
			<MainWrapper>{children}</MainWrapper>
			<Footer />
		</>
	);
};
