const floattooltip = document.querySelector('nav#navbar > span.tooltip') as HTMLSpanElement;
const buttontest = document.querySelector('div#home-section button.email') as HTMLButtonElement;

let statusTooltip: boolean = false;

async function copyEmailToClipboard() {
	const clipboardItemData = {
		'text/plain': 'joans.cardozos@gmail.com',
	};
	const clipboardItem = new ClipboardItem(clipboardItemData);
	await navigator.clipboard.write([clipboardItem]);
}

buttontest.addEventListener('click', async () => {
	if (statusTooltip) return;

	await copyEmailToClipboard()

	statusTooltip = true;

	floattooltip.innerHTML = buttontest.dataset.value as string;

	floattooltip.classList.add('float');

	setTimeout(() => {
		floattooltip.classList.remove('float');
		floattooltip.classList.add('unfloat');

		setTimeout(() => {
			floattooltip.classList.remove('unfloat');
			statusTooltip = false;
		}, 500);
	}, 2000);
});
