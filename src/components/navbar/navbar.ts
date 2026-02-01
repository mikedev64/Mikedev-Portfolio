import { navbarValidValues } from '../../assets/constants';

const navbar = document.querySelector('nav#navbar.--component') as HTMLElement;

const navbar__left__character_identify_character = document.querySelector(
	'img.character'
) as HTMLImageElement;

const navbar__right__options_list__pc__selector = document.querySelector(
	'nav div.selector'
) as HTMLDivElement;
const navbar__right__options_list__pc__list_elements__elements = document.querySelectorAll(
	'li.elements a'
) as NodeListOf<HTMLAnchorElement>;

let pagePosition = window.location.hash;
const charaterImages = {
	noHover: navbar__left__character_identify_character.src,
	hover: 'https://avatars.githubusercontent.com/u/84690368?v=4',
};

function navbarMouseEnter() {
	navbar__left__character_identify_character.src = charaterImages.hover;
}

function navbarMouseLeave() {
	navbar__left__character_identify_character.src = charaterImages.noHover;
}

function changeNavbarTitle() {
	pagePosition =
		window.location.hash.length === 0
			? ''
			: window.location.hash.slice(1, window.location.hash.length);

	if (pagePosition.length !== 0) {
		if (!navbarValidValues.includes(pagePosition)) return window.location.replace('/');

		globalState.set('section', pagePosition);
	} else globalState.set('section', 'Inicio');
}

window.addEventListener('hashchange', changeNavbarTitle);
navbar.addEventListener('mouseenter', navbarMouseEnter);
navbar.addEventListener('mouseleave', navbarMouseLeave);

changeNavbarTitle();

// ===============================================

async function navbarIconCheck(Element: HTMLAnchorElement, value?: string) {
	if (globalState.intersectionCooldown) await new Promise((res => setTimeout(res, 300)));
	// Si viene un valor del evento, actualizar pagePosition
	if (value !== undefined) {
		pagePosition = value;
	}

	if (pagePosition.length === 0 || pagePosition === 'SobreMi') {
		if (Element.dataset.value === 'SobreMi') {
			Element.classList.add('Select');
			navbar__right__options_list__pc__selector.style.left = `${Element.offsetLeft - 5}px`;
		} else {
			Element.classList.remove('Select');
		}
		return;
	}

	// Si hay almohadilla, verificar contra pagePosition
	if (Element.dataset.value === pagePosition) {
		Element.classList.add('Select');
		navbar__right__options_list__pc__selector.style.left = `${Element.offsetLeft - 5}px`;
	} else Element.classList.remove('Select');
}

function navbarIconStatus(Element: HTMLAnchorElement) {
	navbarIconCheck(Element);
	// @ts-ignore
	window.addEventListener('changeglobalstate', ({ detail }) =>
		navbarIconCheck(Element, detail)
	);

	// Activar cooldown cuando se hace clic en un icono
	Element.addEventListener('click', () => {
		// @ts-ignore
		globalState.activateCooldown(100);
	});
}

navbar__right__options_list__pc__list_elements__elements.forEach(navbarIconStatus);
