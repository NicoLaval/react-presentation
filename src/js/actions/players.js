import * as A from './constants';
import { getPlayers } from 'js/api';

export default () => dispatch => {
	dispatch({
		type: A.LOAD_PLAYERS,
		payload: {},
	});
	return getPlayers().then(
		results => {
			dispatch({
				type: A.LOAD_PLAYERS_SUCCESS,
				payload: { results },
			});
		},
		err =>
			dispatch({
				type: A.LOAD_PLAYERS_FAILURE,
				payload: { err },
			})
	);
};
