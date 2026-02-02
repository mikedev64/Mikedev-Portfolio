const clickeableImages = document.querySelectorAll('.expand-image') as NodeListOf<HTMLImageElement>;
const expandedImage = document.querySelector('.expanded') as HTMLDivElement;

function imageClickEvent(this: HTMLImageElement, _event: PointerEvent) {
        (expandedImage.children[0] as HTMLImageElement).src = this.src
        expandedImage.dataset.open = "true"
}

function closeImageExpanded(this: HTMLDivElement, _event: PointerEvent) {
        expandedImage.dataset.open = "false"
}

clickeableImages.forEach((Element) => {
	Element.addEventListener('click', imageClickEvent);
});

expandedImage.addEventListener('click', closeImageExpanded)
