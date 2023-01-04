import { SITE } from "../../../configs/site";

interface Props {
	ogLocale?: string;
}

export const HeadContent: React.FC<Props> = ({ ogLocale = "en_US" }) => (
	<>
		<meta charSet="UTF-8" />
		<meta name="og:site_name" content={SITE.name} />
		<meta name="og:url" content={SITE.url} />
		<meta name="og:locale" content={ogLocale} />
		<link rel="cannonical" href={SITE.url} />
		<meta
			property="twitter:description"
			content="Monitor machine health with the most complete predictive system of the market. Get information in real time to improve your maintenance performance."
		/>
		<meta
			property="twitter:title"
			content="TRACTIAN | Condition Monitoring and Asset Management in one place"
		/>
		<meta property="twitter:url" content="https://tractian.com/" />
		<meta property="twitter:type" content="website" />
		<meta
			property="og:description"
			content="Monitor machine health with the most complete predictive system of the market. Get information in real time to improve your maintenance performance."
		/>
		<meta
			property="og:title"
			content="TRACTIAN | Condition Monitoring and Asset Management in one place"
		/>
		<meta property="og:type" content="website" />
		<meta
			name="description"
			content="Monitor machine health with the most complete predictive system of the market. Get information in real time to improve your maintenance performance."
		/>
		<meta property="og:image" content="https://tractian.com/images/thumb-tractian.png" />
		<meta name="robots" content="index, follow" />
		<meta
			name="bingbot"
			content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
		/>
		<meta
			name="googlebot"
			content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	</>
);
