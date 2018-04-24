import { searchSeriesRequest, searchSeriesSuccess, searchSeriesFailure } from '../actions/search';
import { search } from '../api';

const searchMiddleware = store => next => action => {
	if (action.type === searchSeriesRequest.toString()) {
		search(action.payload)
			.then(series => {
				store.dispatch(searchSeriesSuccess(series));
			})
			.catch(error => {
				store.dispatch(searchSeriesFailure(error));
			});
	}

	return next(action);
};

export default searchMiddleware;