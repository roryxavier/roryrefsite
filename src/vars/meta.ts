import { FursonaModel } from '@/model/Fursona';
import { RouteInfoModel } from '@/model/RouteInfo';

export const APP_VERSION = '0.8.5';
export const OWNER_NAME = 'Rory Xavier';
export const YEAR_UPDATED = '2026';

export const ROUTE_ABOUT_DISABLED = true;
export const ROUTE_CLOTHING_DISABLED = true;

export const ROUTE_HOME = new RouteInfoModel('Home', '/', 'Rory Reference Website');
export const ROUTE_GENERAL = new RouteInfoModel('General', '/general', 'Rory - General');
export const ROUTE_REFERENCE = new RouteInfoModel('Reference', '/reference', 'Rory - Reference');
export const ROUTE_CLOTHING = new RouteInfoModel('Clothing (Beta)', '/clothing', 'Rory - Clothing');
export const ROUTE_ABOUT_ME = new RouteInfoModel('About Me (Beta)', '/about', 'Rory - About Me');

export const ROUTE_NAVIGATIONS: RouteInfoModel[] = [
	ROUTE_HOME,
	ROUTE_GENERAL,
	ROUTE_REFERENCE,
	// CLOTHING,
	// ABOUT_ME,
];

export const RORY_PERSONALITIES = ['Happy Go Lucky', 'Kind', 'Introvert', 'Shy', 'Empathy'];
export const RORY_HOBBIES = ['Programming', 'Tech', 'Cooking', 'Traveling'];
export const RORY_DRINKS = [
	'Fried Rice',
	'Fried Noodle',
	'Coffee',
	'Cheese',
	'Chicken',
	'Sausage',
	'Spicy Food',
	'Mac & Cheese',
	'Paste/Ramen',
	'Chocolate Milk',
];

export const FURSONA_RORY_CHRIS = new FursonaModel({
	name: 'Rory Chris',
	ref: {
		small: 'https://res.jfrx.cf/ref/rory/rory-ref-20230308.png?width=1000',
		full: 'https://res.jfrx.cf/ref/rory/rory-ref-20230308.png',
		author: '@valdithzam',
	},
	yearBorn: 1998,
	icon: '#TODO',
	bios: [
		{ title: 'Full Name', content: 'Rory Christopher' },
		{ title: 'Date of Birth', content: 'September 14, 1998' },
		{ title: 'Sex/Gender', content: 'Male ♂️' },
		{ title: 'Height', content: '162 cm' },
		{ title: 'Weight', content: '60 KG' },
	],
	socialLinks: [
		{
			icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/150px-Logo_of_Twitter.svg.png',
			title: 'Twitter',
			href: 'https://twitter.com/rory_xavi',
		},
		{
			icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mastodon_logotype_%28simple%29_new_hue.svg',
			title: 'Mastodon',
			href: 'https://meow.social/@roryxavier',
		},
		{
			icon: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg',
			title: 'Telegram',
			href: 'https://t.me/RoryXavier',
		},
		{
			icon: 'https://www.furaffinity.net/themes/beta/img/banners/fa_logo.png?v2',
			title: 'Fur Affinity',
			href: 'https://www.furaffinity.net/user/roryxavier',
		},
	],
});
export const FURSONA_JIMMY_FOX = new FursonaModel({
	name: 'Jimmy Fox',
	ref: {
		small: 'jimmy-fox',
		full: 'jimmy-fox',
		author: 'jimmy-fox',
	},
	yearBorn: 1997,
	icon: '#TODO',
	bios: [
		{ title: 'Full Name', content: 'Jimmy Chane' },
		{ title: 'Date of Birth', content: 'November 12, 1997' },
		{ title: 'Sex/Gender', content: 'Male' },
	],
	socialLinks: [],
});

export const FURSONA_LIST: FursonaModel[] = [FURSONA_RORY_CHRIS, FURSONA_JIMMY_FOX];
