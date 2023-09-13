import type { KVPair } from './KVPair';

interface Option {
	name: string;
	ref_link_small?: string;
	ref_link: string;
	year_born: number;
	icon: string;
	bioKV: KVPair[];
}

export default class Fursona {
	private readonly _name: string;
	private readonly _ref_link_small?: string;
	private readonly _ref_link: string;
	private readonly _icon_link: string;
	private readonly _year_born: number;
	private readonly _generalBioTableKVPair: KVPair[];

	constructor(option: Option) {
		this._name = option.name;
		this._ref_link_small = option.ref_link_small;
		this._ref_link = option.ref_link;
		this._year_born = option.year_born;
		this._icon_link = option.icon;
		this._generalBioTableKVPair = option.bioKV;
	}

	get name(): string {
		return this._name;
	}

	get ref_link_small(): string | undefined {
		return this._ref_link_small;
	}

	get ref_link(): string {
		return this._ref_link;
	}

	get year_born(): number {
		return this._year_born;
	}

	get icon_link(): string {
		return this._icon_link;
	}

	get generalProperties(): KVPair[] {
		return this._generalBioTableKVPair;
	}
}
