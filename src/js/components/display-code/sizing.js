import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ZoomOut from 'material-ui/svg-icons/action/zoom-out';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';

function Sizing({ size, sizeDown, sizeUp }) {
	return (
		<div className="mui-row centered">
			<FloatingActionButton
				mini={true}
				secondary={true}
				onClick={sizeDown}
				style={{ boxShadow: 'white' }}
			>
				<ZoomOut />
			</FloatingActionButton>
			<FloatingActionButton
				mini={true}
				secondary={true}
				onClick={sizeUp}
				style={{ boxShadow: 'white' }}
			>
				<ZoomIn />
			</FloatingActionButton>
		</div>
	);
}

Sizing.propTypes = {
	size: PropTypes.number.isRequired,
};

export default Sizing;
