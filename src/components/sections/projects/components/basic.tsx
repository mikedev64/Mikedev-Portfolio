import { projects, selected } from '../context';

export default function BasicProjectInfo() {
	return (
		<div class="basic-info">
			<div className="data-info">
				<span className="counter">
					{selected.value + 1}&nbsp;/&nbsp;{projects.length}
				</span>
				<div className="separator"></div>
				<h3 className="project-name">{projects[selected.value].name}</h3>
			</div>
			<img
				src={projects[selected.value].icon}
				width={94}
				height={94}
				alt={`${projects[selected.value].name} MikeDev Joan Sebastian Cardozo Salinas`}
			/>
		</div>
	);
}
