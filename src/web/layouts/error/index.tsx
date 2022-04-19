import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const ErrorLayout: React.FC<Props> = ({ children }) => <div>{children}</div>;
