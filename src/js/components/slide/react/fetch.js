import React from 'react';
import fetchImg from 'img/fetch.png';

function Fetch() {
	return (
		<div className="img-block">
			<div className="bold centered">Fetch API</div>
			<img src={fetchImg} alt="React-Fetch" className="img-large" />
		</div>
	);
}

export default Fetch;
