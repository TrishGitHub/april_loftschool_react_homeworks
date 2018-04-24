import { getSeriesRequest, getSeriesSuccess, getSeriesFailure } from 'actions/show';
import { show } from 'api';

const showMiddleware = store => next => action => {
	if (action.type === getSeriesRequest.toString()) {
		show(action.payload)
			.then(response => store.dispatch(getSeriesSuccess(response)))
			.catch(error => store.dispatch(getSeriesFailure(error)));
	}

	return next(action);
};

export default showMiddleware;