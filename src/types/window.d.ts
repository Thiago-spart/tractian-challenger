declare global {
	interface Window {
		dataLayer: Array<any>;
	}
}

/*
 * If this file has no import/export statements (i.e. is a script)
 * Convert it into a module by adding an empty export statement.
 */
export {};
