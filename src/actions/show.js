import { createActions } from 'redux-actions';

const {
	show: {
		request: showSeriesRequest,
		success: showSeriesSuccess,
		failure: showSeriesFailure,
	},
} = createActions({
	SHOW: { REQUEST: null, SUCCESS: null, FAILURE: null },
});

export { showSeriesRequest, showSeriesSuccess, showSeriesFailure };