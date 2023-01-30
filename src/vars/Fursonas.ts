import Fursona from '../model/Fursona';

const list: Fursona[] = [
	new Fursona('Rory Chris', 'rory-chris', '#TODO', [
		{ key: 'Full Name', value: 'Rory Christopher' },
		{ key: 'Date of Birth', value: 'September 14, 1998' },
		{ key: 'Sex/Gender', value: 'Male' },
		{ key: 'Height', value: '162 cm' },
		{ key: 'Weight', value: '60 KG' }
	]),
	new Fursona('Jimmy Fox', 'jimmy-fox', '#TODO', [
		{ key: 'Full Name', value: 'Jimmy Chane' },
		{ key: 'Date of Birth', value: 'November 12, 1997' },
		{ key: 'Sex/Gender', value: 'Male' }
	])
];

export default list;
