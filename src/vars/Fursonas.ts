import Fursona from '../model/Fursona';
import RoryXavierImage from '../assets/rory_xavier_w1000.png';

const list: Fursona[] = [
	new Fursona({
		name: 'Rory Chris',
		ref_link_small: RoryXavierImage,
		ref_link:
			'https://d.furaffinity.net/art/roryxavier/1617167004/1617167004.roryxavier_rory_chris_2_0_ref_sheet_by_valdith_zam.jpg',
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
