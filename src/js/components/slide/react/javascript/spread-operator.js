import React from 'react';
import DisplayCode from 'js/components/display-code';

function SpreadOperator() {
	const code = `const a = [1,2]
const b = [3,4]

console.log([...a, ...b]) // [1,2,3,4]`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default SpreadOperator;
