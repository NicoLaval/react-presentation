import React from 'react';
import conclusionImg from 'img/conclusion.png';
import githubImg from 'img/github.png';

function Conclusion() {
	const git = 'https://github.com/NicoLaval/react-presentation';
	const gitPlugin = 'https://github.com/NicoLaval/generated-survey';
	const gitDesktop = 'https://github.com/NicoLaval/psg-desktop';
	const gitWeb = 'https://github.com/NicoLaval/psg-web';
	return (
		<div>
			<div className="img-block">
				<img src={conclusionImg} alt="React" className="img-large" />
			</div>
			<div className="mui-row centered">
				<div className="mui-col-md-4">
					<a target="_blank" href={git} className="home-text">
						<img src={githubImg} alt="GitHub" className="img-large" />
					</a>
				</div>
				<div className="mui-col-md-8">
					<div>
						<a target="_blank" href={gitPlugin} className="home-text">
							{gitPlugin}
						</a>
					</div>
					<div>
						<a target="_blank" href={gitDesktop} className="home-text">
							{gitDesktop}
						</a>{' '}
					</div>
					<div>
						<a target="_blank" href={gitWeb} className="home-text">
							{gitWeb}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Conclusion;
