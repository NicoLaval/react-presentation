import React from 'react';

function Flux() {
	return (
		<div>
			<div className="mui-row">
				<div className="mui-col-md-12">
					Design Pattern avec une implémentation phare :{' '}
					<span className="bold">Redux</span>
				</div>
			</div>
			<br />
			<div className="mui-row">
				<div className="mui-col-md-12">Principaux avantages :</div>
			</div>
			<br />
			<div className="mui-row">
				<ul className="mui-col-md-10 mui-col-md-offset-1 centered">
					<li>{"Mutualisation d'information"}</li>
					<li>{"Connaissance de l'état de l'application à tout instant"}</li>
					<li>{'Forte réduction du nombre de requêtes HTTP'}</li>
				</ul>
			</div>
			<br />
		</div>
	);
}

export default Flux;
