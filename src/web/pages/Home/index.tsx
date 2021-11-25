import { NextPage } from "next";

import React from "react";

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

export const Home: NextPage = () => {
	return (
		<>
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
		</>
	);
};
