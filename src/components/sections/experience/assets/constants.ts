import Miutab from './miutab.astro';
import Netlogistik from './netlogistik.astro';

export const workExperience = [
	{
		isActual: true,
		icon: '/images/sections/experience/miutab.webp',
		name: 'MiuTab',
		position: 'Desarrollador Web Frontend',
		Content: Miutab,
		images: ['/images/sections/experience/miutabwebsite.webp', '/images/sections/experience/condorpluswebsite.webp'],
	},
	{
		icon: '/images/sections/experience/netlogistik.webp',
		name: 'Netlogistik',
		position: 'Trainee',
		Content: Netlogistik,
		images: ['/images/sections/experience/rolloutgeneratorapplication.webp'],
	},
];
