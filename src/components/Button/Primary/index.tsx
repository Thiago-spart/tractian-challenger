import { Button } from "./styles";

interface PrimaryProps {
	message: string;
}

export const Primary = ({ message }: PrimaryProps) => {
	return <Button type="button">{message}</Button>;
};
