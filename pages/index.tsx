import { NextPage } from "next";

import React from "react";

import { UsedBySection } from "src/components/UsedBySection";
import { WelcomeSection } from "src/components/WelcomeSection";

const Home: NextPage = () => {
	return (
		<>
			<WelcomeSection />
			<UsedBySection />
		</>
	);
};
export default Home;
