export interface FursonaRefImageData {
	small?: string;
	full: string;
	author: string;
}

export class FursonaRefImageModel {
	small?: string;
	full: string;
	author: string;

	constructor(data: FursonaRefImageData) {
		this.small = data.small;
		this.full = data.full;
		this.author = data.author;
	}
}
