import GitHub from './github.svg';
import LinkedIn from './linkedin.svg';
import Pixiv from './pixiv.svg';
import Twitter from './twitter.svg';
import Youtube from './youtube.svg';

export const footerFirstListElements = [
	{
		identifier: 'Youtube',
		Icon: Youtube,
		link: '',
		ariaLabel: 'Lleva al area de inicio',
		visible: true,
	},
	{
		identifier: 'TwitterX',
		Icon: Twitter,
		link: '',
		ariaLabel: 'Lleva al area de inicio',
		visible: true,
	},
	{
		identifier: 'Pixiv',
		Icon: Pixiv,
		link: 'https://www.pixiv.net/en/users/123431317',
		ariaLabel: 'Lleva al perfil de la red social de ilustraciones pixiv.com',
		visible: true,
	},
];

export const footerSecondListElements = [
	{
		identifier: 'GitHub',
		Icon: GitHub,
		link: 'https://github.com/mikedev64',
		ariaLabel: 'Lleva al perfil de la red social de programacion y desarrollo github.com',
		visible: true,
	},
	{
		identifier: 'LinkedIn',
		Icon: LinkedIn,
		link: 'https://www.linkedin.com/in/joanscardozos/',
		ariaLabel: 'Lleva al perfil de la red social de profesionales linkedin.com',
		visible: true,
	},
];
