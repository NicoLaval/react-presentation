import React, { Component } from 'react';
import configureStore from 'js/store/configure-store';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import { HashRouter as Router, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Menu from 'js/components/menu';
import PagesRoutes from 'js/components/pages/pages-routes';
import './app.css';

const store = configureStore();

export default class Root extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<Provider store={store}>
					<Router>
						<div>
							<Menu />
							<Switch>
								<PagesRoutes />
								/>
							</Switch>
						</div>
					</Router>
				</Provider>
			</MuiThemeProvider>
		);
	}
}
