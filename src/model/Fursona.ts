import { BioModel, type BioData } from './Bio';
import { FursonaRefImageModel, type FursonaRefImageData } from './FursonaImage';
import { SocialLinkModel, type SocialLinkData } from './SocialLink';

export interface FursonaData {
	name: string;
	ref: FursonaRefImageData;
	yearBorn: number;
	icon: string;
	bios: BioData[];
	socialLinks: SocialLinkData[];
}

export class FursonaOldModel {
	static list: FursonaOldModel[] = [
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

export class FursonaModel {
	readonly name: string;
	readonly ref: FursonaRefImageModel;
	readonly iconLink: string;
	readonly yearBorn: number;
	readonly generalBioTableKVPair: BioModel[];
	readonly socialLinks: SocialLinkModel[];

	public isMain?: boolean; // TODO: remove
	public image?: string | undefined; // TODO: remove
	public species?: string; // TODO: remove

	constructor(data: FursonaData) {
		this.name = data.name;
		this.ref = new FursonaRefImageModel(data.ref);
		this.yearBorn = data.yearBorn;
		this.iconLink = data.icon;
		this.generalBioTableKVPair = data.bios.map((d) => {
			return new BioModel(d);
		});
		this.socialLinks = data.socialLinks.map((d) => {
			return new SocialLinkModel(d);
		});
	}
}
