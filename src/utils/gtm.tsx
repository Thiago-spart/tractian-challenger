/*
 * Import { useRouter } from "next/router";
 * import { useEffect } from "react";
 */

interface PageEventProps {
	event: string;
	page: string;
}

export const setGtmPageView = (url: string) => {
	// Const { push } = useRouter();

	const pageEvent: PageEventProps = {
		event: "pageview",
		page: url,
	};

	/*
	 * UseEffect(() => {
	 * }, [push]);
	 */

	if (window.dataLayer) {
		window.dataLayer.push(pageEvent);
	} else {
		window.dataLayer = [pageEvent];
	}

	return pageEvent;
};
