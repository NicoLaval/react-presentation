import React from 'react';
import DisplayCode from 'js/components/display-code';

function Plugin() {
	const code = `import { GeneratedSurvey } from 'generated-survey'; // npm dependency

...
return (
  <GeneratedSurvey
    todo={todo}
    survey={survey}
    codeList={codeList}
    onClickBack={() => console.log('retour')}
    onClicksave={data => console.log(data)}
    onClickCloseModal={() => console.log('Close confirm modal')}
  />
)
...`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default Plugin;
