import { useEffect, useState } from 'preact/hooks';
import { projects, selected } from '../context';
import BasicProjectInfo from './basic';
import FullProjectData from './data';
import ProjectsGalery from './galery';

export default function GroupContent() {
	const [Style, setStyle] = useState(
		`background: linear-gradient(90deg, #0F0F0FE6 15%, rgba(15, 15, 15, 0.00) 100%), linear-gradient(0deg, #0F0F0FE6 25%, rgba(15, 15, 15, 0.00) 100%), url('${projects[selected.value].background[0]}') center / cover no-repeat`
	);
	const [imagePosition, setImagePosition] = useState(0);

	// Actualiza el estilo cuando cambia la posición de la imagen
	useEffect(() => {
		const currentImage = projects[selected.value].background[imagePosition];
		const newStyle = `background: linear-gradient(90deg, #0F0F0FE6 15%, rgba(15, 15, 15, 0.00) 100%), linear-gradient(0deg, #0F0F0FE6 25%, rgba(15, 15, 15, 0.00) 100%), url('${currentImage}') center / cover no-repeat`;
		setStyle(newStyle);
	}, [imagePosition, selected.value]);

	/* // Intervalo para cambiar la imagen cada segundo
	useEffect(() => {
		const imageLength = projects[selected.value].background.length;

		const intervalId = setInterval(() => {
			setImagePosition((prevPosition) => {
				return (prevPosition + 1) % imageLength;
			});
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, [selected.value]); */

	// Reinicia la posición cuando cambia el proyecto seleccionado
	useEffect(() => {
		setImagePosition(0);
	}, [selected.value]);

	return (
		<div class="background" style={Style}>
			<BasicProjectInfo />
			<div class="container">
				<FullProjectData />
				<ProjectsGalery />
			</div>
		</div>
	);
}
