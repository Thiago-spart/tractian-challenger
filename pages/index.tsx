import { NextPage } from "next";

import React from "react";

import { UsedBySection } from "src/components/UsedBySection";
import { WelcomeSection } from "src/components/WelcomeSection";
import { WhyChoose } from "src/components/WhyChoose";

const Home: NextPage = () => {
	return (
		<>
			<WelcomeSection />
			<UsedBySection />
			<WhyChoose />
		</>
	);
};
export default Home;
