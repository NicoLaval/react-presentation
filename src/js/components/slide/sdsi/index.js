import React from 'react';
import sdsiImg from 'img/react-love.svg';

function Sdsi() {
	return (
		<div>
			<div className="mui-col-md-12 centered">
				Le SGI se serait-il inspiré de React ... ou inversement ?
			</div>
			<br />
			<br />
			<div className="mui-col-md-6">
				<div className="mui-row">
					<div className="mui-col-md-offset-2">Faire :</div>
					<br />
					<div className="mui-col-md-8 mui-col-md-offset-2 centered">
						<ul>
							<li>Simple</li>
							<li>Modulaire</li>
							<li>Réutilisable</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="mui-col-md-6">
				<div className="mui-row">
					<div className="img-block">
						<img src={sdsiImg} alt="React-Love" className="img-large" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sdsi;
