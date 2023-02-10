import Fursona from '../model/Fursona';

const list: Fursona[] = [
	new Fursona(
		'Rory Chris',
		'https://api.freshnet.app/service_v2/get/image/1676037730259.jpeg',
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
