export default function GaleryIcon({ direction }: { direction: 'right' | 'left' }) {
	if (direction === 'left')
		return (
			<svg
				width="25"
				height="45"
				viewBox="0 0 25 45"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M22.5 22.5H2.5M2.5 22.5L22.5 42.5M2.5 22.5L22.5 2.5"
					stroke="#4B4B4B"
					stroke-width="5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		);

	return (
		<svg
			width="25"
			height="45"
			viewBox="0 0 25 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.5 22.5L22.5 22.5M22.5 22.5L2.5 2.5M22.5 22.5L2.5 42.5"
				stroke="#4B4B4B"
				stroke-width="5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}
