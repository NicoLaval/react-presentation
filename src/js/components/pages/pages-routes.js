import React from 'react';
import { Route } from 'react-router-dom';
import Page from './page';
import { items } from 'config/page-configuration';

function PagesRoutes() {
	const pages = items.map(
		({ route, title, body, type }) =>
			type === 'SubHeader' ? null : (
				<Route
					key={route}
					exact
					path={route}
					component={() => <Page title={title} body={body} route={route} />}
				/>
			)
	);

	return <div>{pages}</div>;
}

export default PagesRoutes;
