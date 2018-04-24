import { showSeriesRequest, showSeriesSuccess, showSeriesFailure } from 'actions/show';
import { show } from 'api';

const showMiddleware = store => next => action => {
	if (action.type === showSeriesRequest.toString()) {
		show(action.payload)
			.then(response => store.dispatch(showSeriesSuccess(response)))
			.catch(error => store.dispatch(showSeriesFailure(error)));
	}

	return next(action);
};

export default showMiddleware;