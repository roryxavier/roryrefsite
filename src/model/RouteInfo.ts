export default class RouteInfo {
	public readonly title: string;
	public readonly path: string;

	public readonly header: string;

	constructor(title: string, path: string, header: string) {
		this.title = title;
		this.path = path;
		this.header = header;
	}
}

export const HOME = new RouteInfo('Home', '/', 'Rory Reference Website');
export const GENERAL = new RouteInfo('General', '/general', 'Rory - General');
export const REFERENCE = new RouteInfo('Reference', '/reference', 'Rory - Reference');
export const CLOTHING = new RouteInfo('Clothing (Beta)', '/clothing', 'Rory - Clothing');
export const ABOUT_ME = new RouteInfo('About Me (Beta)', '/about', 'Rory - About Me');

export const list = [
	HOME,
	GENERAL,
	REFERENCE,
	// CLOTHING,
	// ABOUT_ME,
];
