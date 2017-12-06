import React from 'react';
import chatImg from 'img/chat.jpg';
import psgImg from 'img/psg.jpg';

function Theme() {
	return (
		<div>
			<div className="mui-row centered">
				<img src={chatImg} alt="Chat" className="img-medium" />
			</div>
			<br />
			<div className="mui-row centered">
				<div className="mui-col-md-6 pink">
					<br />
					<br />
					<br />
					#ee3467
					<br />
					<br />
					<br />
				</div>
				<div className="mui-col-md-6">
					<img src={psgImg} alt="Psg" className="img-full" />
				</div>
			</div>
		</div>
	);
}

export default Theme;
