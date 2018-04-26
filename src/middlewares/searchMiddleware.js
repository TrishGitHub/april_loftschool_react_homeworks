import { searchSerialsRequest, searchSerialsSuccess, searchSerialsFailure } from 'actions/search';
import { search } from 'api';

const searchMiddleware = store => next => action => {
  if (action.type === searchSerialsRequest.toString()) {
    search(action.payload)
      .then(serials => {
        store.dispatch(searchSerialsSuccess(serials));
      })
      .catch(error => {
        store.dispatch(searchSerialsFailure(error));
      });
  }

  return next(action);
};

export default searchMiddleware;
