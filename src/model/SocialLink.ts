export interface SocialLinkData {
	title: string;
	icon: string;
	href: string;
}

export class SocialLink {
	readonly title: string;
	readonly icon: string;
	readonly href: string;

	constructor(data: SocialLinkData) {
		this.title = data.title;
		this.icon = data.icon;
		this.href = data.href;
	}
}
