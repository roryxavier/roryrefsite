export class Fursona {
	static list: Fursona[] = [
		{ name: 'Rory Christ', species: 'Wolf' },
		{ name: 'Atlas Xavier', species: 'Wolf' },
		{ name: 'Axel Grey', species: 'Wolf' },
		{ name: 'Dustin Neil', species: 'Wolf' },
		{ name: 'Etahn Snow', species: 'Malamut' },
		{ name: 'Keshi Rouka', species: 'Wolf' },
		{ name: 'Khaleesi', species: 'Vernid' },
		{ name: 'Rakkis Lou', species: 'Wolf Dragon' },
		{ name: 'Riku Seiji', species: 'Wolf' },
		{ name: 'Shiro Koizumi', species: 'Wolf' },
	];

	public isMain?: boolean;
	public image?: string | undefined;

	constructor(
		public name: string,
		public species: string,
		addition?: {
			isMain?: boolean;
			image?: string;
		},
	) {
		this.isMain = addition?.isMain ?? false;
		this.image = addition?.image ?? undefined;
	}
}
