import { createActions } from 'redux-actions';

const {
	showRequest: getSeriesRequest,
	showSuccess: getSeriesSuccess,
	showFailure: getSeriesFailure
} = createActions({
	SHOW_REQUEST: null,
	SHOW_SUCCESS: null,
	SHOW_FAILURE: null
});

export { getSeriesRequest, getSeriesSuccess, getSeriesFailure };