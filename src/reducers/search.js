import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchSerialsRequest, searchSerialsSuccess, searchSerialsFailure } from 'actions/search';

const serials = handleActions(
  {
    [searchSerialsSuccess]: (_, action) => action.payload,
  },
  [],
);

const isLoading = handleActions(
  {
    [searchSerialsRequest]: () => true,
    [searchSerialsSuccess]: () => false,
    [searchSerialsFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [searchSerialsFailure]: (_, action) => action.error,
  },
  null,
);

export default combineReducers({
  serials,
  isLoading,
  error
});
