export class Fursona {
	public isMain: boolean;
	public image: string | undefined;

	constructor(
		public name: string,
		public species: string,
		addition?: {
			isMain?: boolean;
			image?: string;
		}
	) {
		this.isMain = addition?.isMain ?? false;
		this.image = addition?.image ?? undefined;
	}
}
