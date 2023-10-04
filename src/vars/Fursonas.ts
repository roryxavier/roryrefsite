import Fursona from '../model/Fursona';

const list: Fursona[] = [
	new Fursona({
		name: 'Rory Chris',
		ref_link_small: 'https://res.jfrx.cf/ref/rory/rory-ref-20230308.png?width=1000',
		ref_link: 'https://res.jfrx.cf/ref/rory/rory-ref-20230308.png',
		year_born: 1998,
		icon: '#TODO',
		bioKV: [
			{ key: 'Full Name', value: 'Rory Christopher' },
			{ key: 'Date of Birth', value: 'September 14, 1998' },
			{ key: 'Sex/Gender', value: 'Male ♂️' },
			{ key: 'Height', value: '162 cm' },
			{ key: 'Weight', value: '60 KG' }
		]
	}),
	new Fursona({
		name: 'Jimmy Fox',
		ref_link: 'jimmy-fox',
		year_born: 1997,
		icon: '#TODO',
		bioKV: [
			{ key: 'Full Name', value: 'Jimmy Chane' },
			{ key: 'Date of Birth', value: 'November 12, 1997' },
			{ key: 'Sex/Gender', value: 'Male' }
		]
	})
];

export default list;
