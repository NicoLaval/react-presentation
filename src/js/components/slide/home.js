import React from 'react';
import reactImg from 'img/react.png';
import reduxImg from 'img/redux.png';
import inseeImg from 'img/insee.jpg';
import githubImg from 'img/github.png';

function Home() {
	const git = 'https://github.com/NicoLaval/presentation-react';
	return (
		<div>
			<div className="img-block">
				<img src={reactImg} alt="React" className="img-medium" />
				<img src={reduxImg} alt="Redux" className="img-medium" />
			</div>
			<br />
			<div className="mui-row home-ref">
				<div className="mui-col-md-4">
					<img src={inseeImg} alt="Insee" className="img-large" />
				</div>
				<div className="mui-col-md-8  pull-right">
					<div>Nicolas Laval</div>
					<div>
						<a target="_blank" href={git} className="home-text">
							<img src={githubImg} alt="GitHub" className="img-mini" />
							{git}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
