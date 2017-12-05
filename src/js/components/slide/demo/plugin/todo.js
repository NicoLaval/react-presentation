import React from 'react';
import DisplayCode from 'js/components/display-code';

function Todo() {
	const code = `const todo = {
	id: 'toto',
	idSurvey: 'ENQ-CS',
	adress: {
		number: '1',
		street: 'rue xxx',
		postalCode: '59000',
		city: 'Lille',
	},
};`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default Todo;
