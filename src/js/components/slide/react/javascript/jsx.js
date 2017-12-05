import React from 'react';
import DisplayCode from 'js/components/display-code';

function Jsx() {
	const code = `import React from 'react';
import PropTypes from 'prop-types';
import DisplayCode from 'js/components/display-code';

function Name({ name }) {
	return <div>{name}</div>
}

Name.propTypes = {
	name: PropTypes.string.isRequired,
}

export default Name`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default Jsx;
