import React from 'react';
import DisplayCode from 'js/components/display-code';

function CodeList() {
	const code = `const codeList = {
	yesNo: [{ id: 'Y', value: 'Oui' }, { id: 'N', value: 'Non' }],
	pcs2003level1: [
		{ id: '1', value: 'Agriculteurs exploitants' },
		{ id: '2', value: "Artisans, commerçants et chefs d'entreprise" },
		{ id: '3', value: 'Cadres et professions intellectuelles supérieures' },
		{ id: '4', value: 'Professions Intermédiaires' },
		{ id: '5', value: 'Employés' },
		{ id: '6', value: 'Ouvriers' },
	],
};`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default CodeList;
