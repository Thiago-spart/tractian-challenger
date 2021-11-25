import { Button } from "./styles";

interface PrimaryProps {
	message: string;
	noBackground?: boolean;
	allWidth?: boolean;
}

export const Secondary = ({ message, noBackground, allWidth }: PrimaryProps) => {
	return (
		<Button allWidth={allWidth} type="button" noBackground={noBackground}>
			<span>{message}</span>
		</Button>
	);
};
