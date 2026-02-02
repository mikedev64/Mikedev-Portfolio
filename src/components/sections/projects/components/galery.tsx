import { projects, selected } from '../context';
import GaleryIcon from './icon';

export default function ProjectsGalery() {
	function ChangeInformation(increment: boolean) {
		let newValue: number;

		if (increment) {
			newValue = selected.value + 1;

			if (newValue >= projects.length) {
				selected.value = 0;
				return;
			}
			selected.value = newValue;
			return;
		}

		newValue = selected.value - 1;

		if (newValue < 0) {
			selected.value = projects.length - 1;
			return;
		}
		selected.value = newValue;
	}

	return (
		<div className="galery">
			<button className="slider left" aria-label="contenido previo de la galeria" onClick={() => ChangeInformation(false)}>
				<GaleryIcon direction="left" />
			</button>
			{/* <div className="container">
				{projects.map(({ thumbnail, name }) => (
					<button className="galery-project">
						<img
							src={thumbnail}
							width={230}
							alt={name}
							height={130}
							className="project-image"
						/>
					</button>
				))}
			</div> */}
			<button className="slider right" aria-label="contenido siguiente de la galeria" onClick={() => ChangeInformation(true)}>
				<GaleryIcon direction="right" />
			</button>
		</div>
	);
}
