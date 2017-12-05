import React from 'react';
import Plugin from './plugin';
import Todo from './todo';
import Survey from './survey';
import CodeList from './code-list';
import Example from './example';

export const conf = [
	{ label: 'Generated Survey', content: <Plugin /> },
	{ label: 'Todo', content: <Todo /> },
	{ label: 'Survey', content: <Survey /> },
	{ label: 'Code list', content: <CodeList /> },
	{ label: 'Exemple', content: <Example /> },
];
