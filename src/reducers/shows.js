import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showSeriesRequest, showSeriesSuccess, showSeriesFailure } from '../actions/show';

const series = handleActions(
	{
		[showSeriesSuccess]:(state, action) => ({ ...state, ...action.payload }),
	},
	{},
);

const isLoading = handleActions(
	{
		[showSeriesRequest]: () => true,
		[showSeriesSuccess]: () => false,
		[showSeriesFailure]: () => false
	},
	false
);

const error = handleActions(
	{
		[showSeriesFailure]: (state, action) => action.error,
	},
	null
);

export default combineReducers({
	series,
	isLoading,
	error
});