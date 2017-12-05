import React from 'react';
import DisplayCode from 'js/components/display-code';

function Destructuration() {
	const code = `const mv = {name: 'Verratti', firstName: 'Marco'}

const { name } = mv

console.log(name) // Verratti`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default Destructuration;
