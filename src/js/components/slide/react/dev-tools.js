import React from 'react';

function DevTools() {
	return (
		<div>
			<div className="mui-col-md-10 mui-col-md-offset-1">
				{"Dans l'éditeur :"}
			</div>
			<br />
			<ul className="mui-col-md-6 mui-col-md-offset-3 centered">
				<li>Hot relaoding</li>
				<li>Linter</li>
			</ul>
			<br />
			<div className="mui-col-md-10 mui-col-md-offset-1">
				Dans le navigateur :
			</div>
			<br />
			<ul className="mui-col-md-6 mui-col-md-offset-3 centered">
				<li>Plugins React & Redux</li>
				<li>Mode debugg</li>
			</ul>
		</div>
	);
}

export default DevTools;
