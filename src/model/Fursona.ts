import { Bio, type BioData } from './Bio';
import { FursonaRefImage, type FursonRefImageData } from './FursonaImage';
import { SocialLink, type SocialLinkData } from './SocialLink';

export interface FursonaData {
	name: string;
	ref: FursonRefImageData;
	yearBorn: number;
	icon: string;
	bios: BioData[];
	socialLinks: SocialLinkData[];
}

export class Fursona {
	readonly name: string;
	readonly ref: FursonaRefImage;
	readonly iconLink: string;
	readonly yearBorn: number;
	readonly generalBioTableKVPair: Bio[];
	readonly socialLinks: SocialLink[];

	constructor(data: FursonaData) {
		this.name = data.name;
		this.ref = new FursonaRefImage(data.ref);
		this.yearBorn = data.yearBorn;
		this.iconLink = data.icon;
		this.generalBioTableKVPair = data.bios.map((d) => {
			return new Bio(d);
		});
		this.socialLinks = data.socialLinks.map((d) => {
			return new SocialLink(d);
		});
	}
}

export const RORY_CHRIS = new Fursona({
	name: 'Rory Chris',
	ref: {
		small: 'https://res.jfrx.cf/ref/rory/rory-ref-20230308.png?width=1000',
		full: 'https://res.jfrx.cf/ref/rory/rory-ref-20230308.png',
		author: '@valdithzam',
	},
	yearBorn: 1998,
	icon: '#TODO',
	bios: [
		{ title: 'Full Name', content: 'Rory Christopher' },
		{ title: 'Date of Birth', content: 'September 14, 1998' },
		{ title: 'Sex/Gender', content: 'Male ♂️' },
		{ title: 'Height', content: '162 cm' },
		{ title: 'Weight', content: '60 KG' },
	],
	socialLinks: [
		{
			icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/150px-Logo_of_Twitter.svg.png',
			title: 'Twitter',
			href: 'https://twitter.com/rory_xavi',
		},
		{
			icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mastodon_logotype_%28simple%29_new_hue.svg',
			title: 'Mastodon',
			href: 'https://meow.social/@roryxavier',
		},
		{
			icon: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg',
			title: 'Telegram',
			href: 'https://t.me/RoryXavier',
		},
		{
			icon: 'https://www.furaffinity.net/themes/beta/img/banners/fa_logo.png?v2',
			title: 'Fur Affinity',
			href: 'https://www.furaffinity.net/user/roryxavier',
		},
	],
});
export const JIMMY_FOX = new Fursona({
	name: 'Jimmy Fox',
	ref: {
		small: 'jimmy-fox',
		full: 'jimmy-fox',
		author: 'jimmy-fox',
	},
	yearBorn: 1997,
	icon: '#TODO',
	bios: [
		{ title: 'Full Name', content: 'Jimmy Chane' },
		{ title: 'Date of Birth', content: 'November 12, 1997' },
		{ title: 'Sex/Gender', content: 'Male' },
	],
	socialLinks: [],
});

export const LIST: Fursona[] = [RORY_CHRIS, JIMMY_FOX];
