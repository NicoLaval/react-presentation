import * as A from 'js/actions/constants';
import { LOADED, LOADING, ERROR } from 'js/constants';

export default function(state = [], action) {
	switch (action.type) {
		case A.LOAD_PLAYERS:
			return {
				status: LOADING,
			};
		case A.LOAD_PLAYERS_SUCCESS:
			return {
				status: LOADED,
				results: action.payload.results,
			};
		case A.LOAD_PLAYERS_FAILURE:
			return {
				status: ERROR,
				err: action.payload.err,
			};
		default:
			return state;
	}
}
