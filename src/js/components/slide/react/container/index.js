import React from 'react';
import Tabs from 'js/components/shared/tabs';
import { conf } from './conf';

function ContainerSlide() {
	return (
		<div className="mui-col-md-12 centered">
			<Tabs tabs={conf} />
		</div>
	);
}

export default ContainerSlide;
