export class RouteInfoModel {
	public readonly title: string;
	public readonly path: string;

	public readonly header: string;

	constructor(title: string, path: string, header: string) {
		this.title = title;
		this.path = path;
		this.header = header;
	}
}

export const ROUTE_HOME = new RouteInfoModel('Home', '/', 'Rory Reference Website');
export const ROUTE_GENERAL = new RouteInfoModel('General', '/general', 'Rory - General');
export const ROUTE_REFERENCE = new RouteInfoModel('Reference', '/reference', 'Rory - Reference');
export const ROUTE_CLOTHING = new RouteInfoModel('Clothing (Beta)', '/clothing', 'Rory - Clothing');
export const ROUTE_ABOUT_ME = new RouteInfoModel('About Me (Beta)', '/about', 'Rory - About Me');

export const ROUTE_NAVIGATIONS: RouteInfoModel[] = [
	ROUTE_HOME,
	ROUTE_GENERAL,
	ROUTE_REFERENCE,
	// CLOTHING,
	// ABOUT_ME,
];
