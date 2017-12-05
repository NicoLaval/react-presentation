import React from 'react';
import DisplayCode from 'js/components/display-code';

function Survey() {
	const code = `const survey = {
	id: 'ENQ-CS',
	label: 'Enquête CS',
	survey: [
		{
			type: 'multiIndividualResponse',
			label: "Sélectionner le nombre d'actif du ménage :",
			min: 0,
			max: 10,
			variable: 'multiIndividualResponse',
			required: 'true',
			fields: [
				{
					type: 'input',
					label: 'Nom',
					variable: 'name',
					required: 'true',
				},
				{
					type: 'input',
					label: 'Prénom',
					variable: 'firstName',
					required: 'true',
				},
				{
					type: 'select',
					label: 'Sélectionner votre catégorie socio-professionnelle :',
					options: 'pcs2003level1',
					variable: 'cs1',
					required: 'true',
				},
			],
		},
		{
			type: 'select',
			label: "Le ménage est-il composé d'étudiant(s) ?",
			options: 'yesNo',
			variable: 'hasStudent',
			required: 'true',
		},
	],
};`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default Survey;
