import React from 'react';
import DisplayCode from 'js/components/display-code';

function Component() {
	const code = `import React from 'react';
import Table from 'js/components/shared/table';

function Players({ players }) {
	return (
		<Table title={'Liste des joueurs du PSG au 30/06/17'} data={players} />
	);
}

export default Players;`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default Component;
