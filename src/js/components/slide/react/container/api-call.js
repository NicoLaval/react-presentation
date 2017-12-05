import React from 'react';
import DisplayCode from 'js/components/display-code';

function ApiCall() {
	const code = `export function getPlayers() {
	return fetch(URI_API, {
		headers: {
			Accept: 'application/json',
		},
	}).then(res => res.json());
}`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default ApiCall;
