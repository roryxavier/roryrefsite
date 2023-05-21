import Fursona from '../model/Fursona';

const list: Fursona[] = [
	new Fursona(
		'Rory Chris',
		'https://res.freshnet.app/background/rory_chris_refsheet.png?width=1000',
		1998,
		'#TODO',
		[
			{ key: 'Full Name', value: 'Rory Christopher' },
			{ key: 'Date of Birth', value: 'September 14, 1998' },
			{ key: 'Sex/Gender', value: 'Male ♂️' },
			{ key: 'Height', value: '162 cm' },
			{ key: 'Weight', value: '60 KG' }
		]
	),
	new Fursona('Jimmy Fox', 'jimmy-fox', 1997, '#TODO', [
		{ key: 'Full Name', value: 'Jimmy Chane' },
		{ key: 'Date of Birth', value: 'November 12, 1997' },
		{ key: 'Sex/Gender', value: 'Male' }
	])
];

export default list;
