import React from 'react';
import Schema from './schema';
import ApiCall from './api-call';
import Container from './container';
import Component from './component';

export const conf = [
	{ label: 'Schema', content: <Schema /> },
	{ label: 'Appel API', content: <ApiCall /> },
	{ label: 'Container', content: <Container /> },
	{ label: 'Composant', content: <Component /> },
];
