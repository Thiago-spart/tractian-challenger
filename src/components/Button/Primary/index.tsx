import { Button } from "./styles";

interface PrimaryProps {
	message: string;
	noBackground?: boolean;
}

export const Primary = ({ message, noBackground }: PrimaryProps) => {
	return (
		<Button type="button" noBackground={noBackground}>
			<span>{message}</span>
		</Button>
	);
};
