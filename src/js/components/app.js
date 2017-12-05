import React from 'react';
import reactImg from '../../img/react.png';
import reduxImg from '../../img/redux.png';

function App() {
	return (
		<div className="img-block">
			<img src={reactImg} alt="React" className="img" />
			<img src={reduxImg} alt="Redux" className="img" />
		</div>
	);
}

export default App;
