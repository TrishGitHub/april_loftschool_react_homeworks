import { getSerialRequest, getSerialSuccess, getSerialFailure } from 'actions/show';
import { show } from 'api';

const showMiddleware = store => next => action => {
  if (action.type === getSerialRequest.toString()) {
    show(action.payload)
      .then(response => store.dispatch(getSerialSuccess(response)))
      .catch(error => store.dispatch(getSerialFailure(error)));
  }

  return next(action);
};

export default showMiddleware;
