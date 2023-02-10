import RouteInfo from '../model/RouteInfo';

export default {
	version: '0.2.0',
	pageMetaData: {
		copyWriteName: 'Rory Xavier',
		dateUpdated: '12 December',
		yearUpdated: '2023',
		commitHash: '463057b'
	},
	navigationsLinks: [
		new RouteInfo('Home', '/', 'Hello Rory!'),
		new RouteInfo('General', '/general', 'Rory - General'),
		new RouteInfo('Anatomy', '/anatomy', 'Rory - Anatomy'),
		new RouteInfo('Clothing', '/clothing', 'Rory - Clothing')
	],
	socialLink: [
		{
			icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg',
			title: 'Twitter',
			href: 'https://twitter.com/rory_xavi'
		},
		{
			icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mastodon_logotype_%28simple%29_new_hue.svg',
			title: 'Mastodon',
			href: 'https://meow.social/@roryxavier'
		},
		{
			icon: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg',
			title: 'Telegram',
			href: 'https://t.me/RoryXavier'
		},
		{
			icon: 'https://www.furaffinity.net/themes/beta/img/banners/fa_logo.png?v2',
			title: 'Fur Affinity',
			href: 'https://www.furaffinity.net/user/roryxavier'
		}
	]
};
