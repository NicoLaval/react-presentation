import React from 'react';
import DisplayCode from 'js/components/display-code';

function Container() {
	const code = `import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Players from './';
import { getPlayers } from 'js/api';

class PlayersContainer extends Component {
	componentWillMount() {
		getPlayers().then(players => this.setState({ players }));
	}

	render() {
		if (this.state) {
			return <Players players={this.state.players} />;
		}

		return (
			<div className=" centered">
				<CircularProgress
					size={300}
					thickness={15}
					color="ee3467"
					className="circularProgress"
				/>
			</div>
		);
	}
}

export default PlayersContainer;`;
	return (
		<div className="mui-col-md-12">
			<DisplayCode content={code} />
		</div>
	);
}

export default Container;
