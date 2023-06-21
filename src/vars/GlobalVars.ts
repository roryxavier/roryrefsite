import RouteInfo from '../model/RouteInfo';

export default {
	version: '0.7.0',
	pageMetaData: {
		copyWriteName: 'Rory Xavier',
		yearUpdated: '2023'
	},
	navigationsLinks: [
		new RouteInfo('Home', '/', 'Rory Reference Website'),
		new RouteInfo('General', '/general', 'Rory - General'),
		new RouteInfo('Reference', '/reference', 'Rory - Reference'),
		new RouteInfo('Clothing', '/clothing', 'Rory - Clothing')
	],
	socialLink: [
		{
			icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/150px-Logo_of_Twitter.svg.png',
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
