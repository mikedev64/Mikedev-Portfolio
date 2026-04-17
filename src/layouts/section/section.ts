const page_sections = document.querySelectorAll('section.page-section') as NodeListOf<HTMLElement>;

const IntersectionObserverConfig: IntersectionObserverInit = {
	root: null,
	rootMargin: '0px',
	threshold: 0.50,
};

function IntersectionObserverCallback(entries: IntersectionObserverEntry[]) {
	// @ts-ignore
	entries.forEach(async (entry) => {
		const currentSection = entry.target as HTMLElement;
		const h2Element = currentSection.querySelector(
			'h2.separator'
		) as HTMLHeadingElement;
		
		if (entry.isIntersecting && entry.intersectionRatio >= 0.50) {
			globalState.set('section', h2Element.dataset.value);
			// Remover la clase active de todos los h2
			page_sections.forEach((section) => {
				const h2 = section.querySelector('h2.separator');
				h2?.classList.remove('active');
			});

			// Agregar la clase active al h2 de la sección actual
			h2Element?.classList.add('active');
		}
	});
}

const pageObserver = new IntersectionObserver(
	IntersectionObserverCallback,
	IntersectionObserverConfig
);

page_sections.forEach((Section) => pageObserver.observe(Section));
