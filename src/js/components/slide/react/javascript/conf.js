import React from 'react';
import ImportExport from './import-export';
import ArrowFunction from './arrow-function';
import Destructuration from './destructuration';
import SpreadOperator from './spread-operator';
import Jsx from './jsx';

export const conf = [
	{ label: 'Import / Export', content: <ImportExport /> },
	{ label: 'Arrow function', content: <ArrowFunction /> },
	{ label: 'Destructuration', content: <Destructuration /> },
	{ label: 'Spread-operator', content: <SpreadOperator /> },
	{ label: 'Jsx', content: <Jsx /> },
];
