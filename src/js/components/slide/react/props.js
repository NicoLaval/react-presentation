import React from 'react';

function Props() {
	return (
		<div className="mui-col-md-8 mui-col-md-offset-2 centered">
			<ul>
				<li>Paramètres fournis au composant</li>
				<br />
				<li>{"Permet d'échanger de l'information entre composants"}</li>
			</ul>
			<br />
			<div>=> Données "externes" passées au composant</div>
		</div>
	);
}

export default Props;
