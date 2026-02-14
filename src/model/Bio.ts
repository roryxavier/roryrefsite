export interface BioData {
	title: string;
	content: string;
}

export class BioModel {
	readonly title: string;
	readonly content: string;

	constructor(data: BioData) {
		this.title = data.title;
		this.content = data.content;
	}
}
