import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { getSeriesRequest, getSeriesSuccess, getSeriesFailure } from '../actions/search';

const series = handleActions(
	{
		[getSeriesSuccess]: (state, action) => action.payload
	},
	[]
);

const isLoading = handleActions(
	{
		[getSeriesRequest]: () => true,
		[getSeriesSuccess]: () => false,
		[getSeriesFailure]: () => false
	},
	false,
);

const error = handleActions(
	{
		[getSeriesFailure]: (state, action) => action.error,
	},
	null
);

export default combineReducers({
	series,
	isLoading,
	error
});