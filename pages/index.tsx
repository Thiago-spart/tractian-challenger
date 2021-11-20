import { NextPage } from "next";

import React from "react";

import { HomeForm } from "src/components/HomeForm";
import { HowWorksSection } from "src/components/HowWorksSection";
import { InviteSection } from "src/components/InviteSection";
import { OpinionSection } from "src/components/OpinionSection";
import { Percentage } from "src/components/Percentage";
import { PlanSection } from "src/components/PlanSection";
import { QualitySection } from "src/components/QualitySection";
import { SensorSection } from "src/components/SensorSection";
import { UsedBySection } from "src/components/UsedBySection";
import { WelcomeSection } from "src/components/WelcomeSection";
import { WhyChoose } from "src/components/WhyChoose";

const Home: NextPage = () => {
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
export default Home;
