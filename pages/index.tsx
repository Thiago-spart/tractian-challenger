import { NextPage } from "next";

import React from "react";

import { HowWorksSection } from "src/components/HowWorksSection";
import { Percentage } from "src/components/Percentage";
import { PlanSection } from "src/components/PlanSection";
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
		</>
	);
};
export default Home;
