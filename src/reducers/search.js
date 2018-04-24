import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchSeriesRequest, searchSeriesSuccess, searchSeriesFailure } from '../actions/search';

const series = handleActions(
	{
		[searchSeriesSuccess]: (state, action) => action.payload
	},
	[]
);

const isLoading = handleActions(
	{
		[searchSeriesRequest]: () => true,
		[searchSeriesSuccess]: () => false,
		[searchSeriesFailure]: () => false
	},
	false,
);

const error = handleActions(
	{
		[searchSeriesFailure]: (state, action) => action.error,
	},
	null
);

export default combineReducers({
	series,
	isLoading,
	error
});