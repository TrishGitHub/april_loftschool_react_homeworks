import { createActions } from 'redux-actions';

const {
	search: {
		request: searchSeriesRequest,
		success: searchSeriesSuccess,
		failure: searchSeriesFailure,
	},
} = createActions({
	SEARCH: { REQUEST: null, SUCCESS: null, FAILURE: null },
});

export { searchSeriesRequest, searchSeriesSuccess, searchSeriesFailure };