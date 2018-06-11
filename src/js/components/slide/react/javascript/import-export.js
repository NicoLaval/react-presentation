import React from 'react';
import DisplayCode from 'js/components/display-code';

function ImportExport() {
	const exportCode = `export const count = 2`;
	const importCode = `import { count } from '../counter'
const b = () => count + 1
console.log(b())  // 3`;
	return (
		<div className="mui-col-md-12">
			<label>Module 'counter'</label>
			<DisplayCode content={exportCode} />
			<label>Module 'app'</label>
			<DisplayCode content={importCode} />
		</div>
	);
}

export default ImportExport;
