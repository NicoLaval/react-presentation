import React from 'react';
import DisplayCode from 'js/components/display-code';

function StatelessComponent() {
	const code = `import React from 'react';
import PropTypes from 'prop-types';

function PageTitle({ title }) {
	return (
		<h2>
			{title}
		</h2>
	);
}

PageTitle.proptTypes = {
	title: PropTypes.string.isRequired,
};

export default PageTitle;
`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default StatelessComponent;
