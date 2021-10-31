import React, { FC } from "react";

import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

import { MainWrapper } from "./styles";

export const Layout: FC = ({ children }) => (
	<>
		<Header />
		<MainWrapper>{children}</MainWrapper>
		<Footer />
	</>
);
