import React from 'react';
import { GeneratedSurvey } from 'generated-survey';

function Example() {
	const todo = {
		id: 'toto',
		idSurvey: 'ENQ-CS',
		adress: {
			number: '1',
			street: 'rue xxx',
			postalCode: '59000',
			city: 'Lille',
		},
	};

	const survey = {
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
	};

	const codeList = {
		yesNo: [{ id: 'Y', value: 'Oui' }, { id: 'N', value: 'Non' }],
		pcs2003level1: [
			{ id: '1', value: 'Agriculteurs exploitants' },
			{ id: '2', value: "Artisans, commerçants et chefs d'entreprise" },
			{ id: '3', value: 'Cadres et professions intellectuelles supérieures' },
			{ id: '4', value: 'Professions Intermédiaires' },
			{ id: '5', value: 'Employés' },
			{ id: '6', value: 'Ouvriers' },
		],
	};

	const { number, street, postalCode, city } = todo.adress;
	const adressLabel = `Adresse du ménage : ${number} ${street} - ${
		postalCode
	} - ${city}`;

	return (
		<div>
			<div className="mui-row">
				<h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
					'generated-survey' plugin sample
				</h1>
				<h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
					{survey.label}
				</h1>
			</div>
			<div className="mui-row">
				<h4 className="mui-col-md-12 centered">{adressLabel}</h4>
			</div>
			<div className="mui-row">
				<GeneratedSurvey
					todo={todo}
					survey={survey}
					codeList={codeList}
					onClickBack={() => console.log('retour')}
					onClicksave={data => console.log(data)}
					onClickCloseModal={() => console.log('Close confirm modal')}
				/>
			</div>
		</div>
	);
}

export default Example;
