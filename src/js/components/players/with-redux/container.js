import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import Players from './';
import { NOT_LOADED } from 'js/constants';
import loadPlayers from 'js/actions/players';

class PlayersContainer extends Component {
	componentWillMount() {
		if (!this.props.players) {
			this.props.loadPlayers();
		}
	}

	render() {
		const { players } = this.props;

		if (!players) {
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
		return <Players players={players} />;
	}
}

const mapStateToProps = state => {
	if (!state.players) {
		return {
			status: NOT_LOADED,
			players: [],
		};
	}

	let { results: players, status, err } = state.players;

	return {
		players,
		status,
		err,
	};
};

const mapDispatchToProps = {
	loadPlayers,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer);
