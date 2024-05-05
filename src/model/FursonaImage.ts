export interface FursonRefImageData {
	small?: string;
	full: string;
	author: string;
}

export class FursonaRefImage {
	small?: string;
	full: string;
	author: string;

	constructor(data: FursonRefImageData) {
		this.small = data.small;
		this.full = data.full;
		this.author = data.author;
	}
}
