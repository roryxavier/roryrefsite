import type { KVPair } from './KVPair';

export default class Fursona {
	private readonly _name: string;
	private readonly _ref_link: string;
	private readonly _icon_link: string;
	private readonly _year_born: number;
	private readonly _generalBioTableKVPair: KVPair[];

	constructor(name: string, ref_link: string, year_born: number, icon: string, bioKV: KVPair[]) {
		this._name = name;
		this._ref_link = ref_link;
		this._year_born = year_born;
		this._icon_link = icon;
		this._generalBioTableKVPair = bioKV;
	}

	get name(): string {
		return this._name;
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
