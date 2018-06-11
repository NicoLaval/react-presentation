import React from 'react';
import DisplayCode from 'js/components/display-code';

function ArrowFunction() {
	const code = `const myFunc = x => console.log(x+1)

myFunc(2) // 3`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default ArrowFunction;
