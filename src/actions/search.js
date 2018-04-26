import { createActions } from 'redux-actions';

const {
  search: {
    request: searchSerialsRequest,
    success: searchSerialsSuccess,
    failure: searchSerialsFailure,
  },
} = createActions(
  {
    SEARCH: { REQUEST: null, SUCCESS: null, FAILURE: null },
  },
  { namespace: '_' },
);

export { searchSerialsRequest, searchSerialsSuccess, searchSerialsFailure };
