import { useEffect, useState } from 'preact/hooks';
import { projects, selected } from '../context';
import BasicProjectInfo from './basic';
import FullProjectData from './data';
import ProjectsGalery from './galery';

export default function GroupContent() {
	const [Style, setStyle] = useState(
		`background: linear-gradient(90deg, #0F0F0FE6 15%, rgba(15, 15, 15, 0.00) 60%), linear-gradient(0deg, #0F0F0FE6 15%, rgba(15, 15, 15, 0.00) 60%), url('${projects[selected.value].background[0]}') 25% / cover no-repeat`
	);

	// Función para obtener el estilo según el tamaño de pantalla
	const getBackgroundStyle = (image: string, isMobile: boolean) => {
		if (isMobile) {
			return `background: linear-gradient(180deg, #0F0F0FE6 0%, rgba(15, 15, 15, 0.00) 20%), linear-gradient(0deg, #0F0F0FE6 15%, rgba(15, 15, 15, 0.00) 80%), url('${image}') center / cover no-repeat`;
		}
		return `background: linear-gradient(90deg, #0F0F0FE6 15%, rgba(15, 15, 15, 0.00) 60%), linear-gradient(0deg, #0F0F0FE6 15%, rgba(15, 15, 15, 0.00) 60%), url('${image}') 25% / cover no-repeat`;
	};

	// Actualiza el estilo cuando cambia la posición de la imagen o el tamaño de pantalla
	useEffect(() => {
		const updateStyle = () => {
			const currentImage = projects[selected.value].background[0];
			const isMobile = window.innerWidth <= 1050;
			const newStyle = getBackgroundStyle(currentImage, isMobile);
			setStyle(newStyle);
		};

		updateStyle();
		window.addEventListener('resize', updateStyle);

		return () => window.removeEventListener('resize', updateStyle);
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
