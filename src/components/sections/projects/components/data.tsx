import { projects, selected } from '../context';
import TopographicMap from './topographic';

export default function FullProjectData() {
	return (
		<div className="full-information">
			<p className="description">{projects[selected.value].description}</p>
			<div className="separator"></div>
			<ul className="links">
				{projects[selected.value].link.map(({ type, url, text }) => (
					<li className="element">
						<a href={url} target="_blank" class={type}>
							{type === 'main' ? (
								<>
									<img src="/assets/link-icon.svg" alt="MikeDev link icon" />
									<span className="text">
										{text}
									</span>
								</>
							) : (
								<>
									<span className="text">
										{text}
									</span>
									<div className="container">
										<TopographicMap />
									</div>
								</>
							)}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
