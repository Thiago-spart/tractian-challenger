import React, { useState } from "react";

import { Footer } from "web/components/Footer";
import { Header } from "web/components/Header";
import { MobileMenu } from "web/components/MobileMenu";

import { HomeForm } from "./components/HomeForm";
import { HowWorksSection } from "./components/HowWorksSection";
import { InviteSection } from "./components/InviteSection";
import { OpinionSection } from "./components/OpinionSection";
import { Percentage } from "./components/Percentage";
import { PlanSection } from "./components/PlanSection";
import { QualitySection } from "./components/QualitySection";
import { SensorSection } from "./components/SensorSection";
import { UsedBySection } from "./components/UsedBySection";
import { WelcomeSection } from "./components/WelcomeSection";
import { WhyChoose } from "./components/WhyChoose";
import { HeadTitle } from "@components/HeadTitle";

import type { FCWithLayout } from "types/layout";

export const Home: FCWithLayout = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const openModal = () => {
		setIsOpenModal(true);
	};

	const closeModal = () => {
		setIsOpenModal(false);
	};

	return (
		<>
			<HeadTitle title="Condition Monitoring and Asset Management in one place" />
			<Header isModalOpen={openModal} />
			<MobileMenu isOpen={isOpenModal} onRequestClose={closeModal} />
			<WelcomeSection />
			<UsedBySection />
			<WhyChoose />
			<SensorSection />
			<PlanSection />
			<HowWorksSection />
			<Percentage />
			<OpinionSection />
			<InviteSection />
			<HomeForm />
			<QualitySection />
			<Footer />
		</>
	);
};
