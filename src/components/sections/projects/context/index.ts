import { createContext } from 'preact';
import { signal } from '@preact/signals';

export const selected = signal(0);

export const projects = [
	{
		name: 'GameScriptJs - JavaScript 2D Game Engine',
		description:
			'Motor de videojuegos para experiencias 2D y novelas visuales en JavaScript o TypeScript. Integrando una arquitectura modular para extender y personalizar el flujo de desarrollo, ofreciendo un enfoque ordenado para proyectos de cualquier escala, incluyendo un editor personalizable con un estilo inspirado en Unity o Blender, permitiendo la exportación a PC y navegador',
		icon: '/images/sections/projects/gamescript_temporal_logo.webp',
		thumbnail: '/images/sections/projects/gamescript_temporal_logo.webp',
		background: ['/images/sections/projects/gamescriptjs-background.webp'],
		link: [
			{
				type: 'normal',
				text: 'GitHub',
				url: 'https://github.com/mikedev64/GameScriptJs',
			},
		],
	},
	{
		name: 'Steam Clon IA',
		description:
			'Un Clon de la famosa plataforma de videojuegos, integrando inteligencia artificial con el SDK de IA de Vercel para el sistema de reseñas de los juegos, incluye creación y visibilidad de perfiles de usuario, página principal y buscador, participando en la HACKATHON de VERCEL. Interfaz creada por Juxtopposed (YouTube)',
		icon: '/images/sections/projects/steam-logo.webp',
		thumbnail: '/images/sections/projects/steam-clon-background.webp',
		background: [
			'/images/sections/projects/store-page.webp',
			'/images/sections/projects/steam-clon-background.webp',
		],
		link: [
			{
				type: 'normal',
				text: 'GitHub',
				url: 'https://github.com/mikedev64/SteamClonAI',
			},
		],
	},
	{
		name: 'Spotify Clon',
		description:
			'Una recreacion del servicio en streaming de musica Spotify incluyendo un cambio de interfaz propuesta por Juxtopposed (YouTube), siendo una version funcional de este diseño, aplicando caracteristicas de letras, cola de reproduccion, API de mdios en reproduccion, y controles de reproduccion',
		icon: '/images/sections/projects/spotify-logo.webp',
		thumbnail: '/images/sections/projects/spotify-clon-background.webp',
		background: ['/images/sections/projects/spotify-clon-background.webp'],
		link: [
			{
				type: 'main',
				text: 'Enlace',
				url: 'https://spotify-clon-interface.vercel.app/',
			},
			{
				type: 'normal',
				text: 'GitHub',
				url: 'https://github.com/mikedev64/SpotifyClon',
			},
		],
	},
];

export const ProjectsData = {
	selected,
	projects,
	setSelected(value: number) {
		selected.value = value;
	},
};

export const ProjectsContext = createContext(ProjectsData);
