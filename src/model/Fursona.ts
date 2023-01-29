import type { KVPair } from './KVPair';

export default class Fursona {
	private readonly _name: string;
	private readonly _path: string;
	private readonly _icon: string;

	private readonly _generalBioTableKVPair: KVPair[];

	constructor(name: string, path: string, icon: string, bioKV: KVPair[]) {
		this._name = name;
		this._path = path;
		this._icon = icon;
		this._generalBioTableKVPair = bioKV;
	}

	get name(): string {
		return this._name;
	}

	get path(): string {
		return this._path;
	}

	get icon(): string {
		return this._icon;
	}

	get generalBioTableKVPair(): KVPair[] {
		return this._generalBioTableKVPair;
	}
}
