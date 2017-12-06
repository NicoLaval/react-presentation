import React from 'react';
import * as S from 'js/components/slide';

export const items = [
	{ route: '/', title: 'Home', body: <S.Home /> },
	{
		route: '/theme',
		title: "Comment justifier l'injustifiable ?",
		body: <S.Theme />,
	},
	{ route: '', title: 'React', type: 'SubHeader' },
	{
		route: '/react-intro',
		title: "Qu'est-ce que React ?",
		body: <S.ReactIntro />,
	},
	{
		route: '/react-insee',
		title: "React à l'Insee",
		body: <S.ReactInsee />,
	},
	{
		route: '/react-js',
		title: 'Javascript à la sauce 2017',
		body: <S.Javascript />,
	},
	{
		route: '/react-component-state',
		title: "' State ' d'un composant",
		body: <S.State />,
	},
	{
		route: '/react-component-props',
		title: "' Props ' d'un composant",
		body: <S.Props />,
	},
	{
		route: '/react-statless-component',
		title: 'Composant statless',
		body: <S.StatelessComponent />,
	},
	{
		route: '/react-component',
		title: 'Composant',
		body: <S.Component />,
	},
	{
		route: '/react-component-lifecycle',
		title: "Cycle de vie d'un composant",
		body: <S.Lifecycle />,
	},
	{
		route: '/react-ecosystem',
		title: "L'écosystème autour de React",
		body: <S.Ecosystem />,
	},
	{
		route: '/react-create-react-app',
		title: 'Industrialiser React :\n create-react-app',
		body: <S.CreateReactApp />,
	},
	{
		route: '/react-router',
		title: 'Single page application, really ?',
		body: <S.ReactRouter />,
	},
	// {
	// 	route: '/react-dev-tools',
	// 	title: 'React Dev Tools => Easy life ! ?',
	// 	body: <S.DevTools />,
	// },
	{
		route: '/react-generic',
		title: 'React & la généricité',
		body: <S.Generic />,
	},
	{
		route: '/react-fetch',
		title: 'React et les data',
		body: <S.Fetch />,
	},
	{
		route: '/react-fetch-container',
		title: "React et les data : le ' Container '",
		body: <S.FetchContainer />,
	},
	{
		route: '/react-fetch-example',
		title: "React et les data : l'exemple",
		body: <S.FetchExample />,
	},
	{ route: '', title: 'Redux', type: 'SubHeader' },
	{
		route: '/react-flux',
		title: 'React / Flux : Faster, stronger',
		body: <S.ReactFlux />,
	},
	{
		route: '/flux',
		title: 'React / Flux : Faster, stronger',
		body: <S.Flux />,
	},
	{
		route: '/flux-workflow',
		title: 'Flux, une architecture unidirectionnelle',
		body: <S.FluxWorkflow />,
	},
	{
		route: '/flux-example',
		title: "Flux, l'exemple",
		body: <S.FluxExample />,
	},
	{ route: '', title: 'Demo', type: 'SubHeader' },
	{
		route: '/generated-survey',
		title: "Plugin React ' generated-survey '",
		body: <S.GeneratedSurvey />,
	},
	{
		route: '/multiplate-form',
		title: 'Application React multiplate-forme',
		body: <S.MultiplateForm />,
	},
	{ route: '', title: 'Conclusion', type: 'SubHeader' },
	{
		route: '/conclusion-quiz',
		title: 'React Pursuit',
		body: <S.Quiz />,
	},
	{
		route: '/conclusion-sdsi',
		title: 'React => SDSI || SDSI => React ?',
		body: <S.Sdsi />,
	},
	{
		route: '/conclusion',
		title: 'Enjoy !',
		body: <S.Conclusion />,
	},
];
