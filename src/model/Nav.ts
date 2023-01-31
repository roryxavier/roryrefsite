export default class Nav {
	public readonly title: string;
	public readonly path: string;

	constructor(title: string, path: string) {
		this.title = title;
		this.path = path;
	}
}
