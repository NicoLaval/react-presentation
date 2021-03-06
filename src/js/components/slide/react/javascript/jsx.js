import React from 'react';
import DisplayCode from 'js/components/display-code';

function Jsx() {
	const code = `import React from 'react';
import PropTypes from 'prop-types';
import DisplayCode from 'js/components/display-code';

const Name = name => <div className="myClass">{name}</div>
	// compile in :
	// React.createElement('div', {className: 'myClass'}, name)


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
