export class GalleryModel {
	readonly title: string = '';
	readonly subtitle: string = '';

	constructor(
		readonly image: string,
		addition: {
			title?: string;
			subtitle?: string;
		},
	) {
		this.title = addition.title ?? '';
		this.subtitle = addition.subtitle ?? '';
	}
}
