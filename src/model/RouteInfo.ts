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
