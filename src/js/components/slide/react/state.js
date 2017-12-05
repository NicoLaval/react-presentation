import React from 'react';

function State() {
	return (
		<div className="mui-col-md-8 mui-col-md-offset-2 centered">
			<ul>
				<li>Donner un état au composant</li>
				<br />
				<li>{"Prend la forme d'un objet"}</li>
				<br />
				<li>Evolution dans le temps</li>
			</ul>
			<br />
			<div>=> Données "internes" du composant</div>
		</div>
	);
}

export default State;
