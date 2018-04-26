import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { getSerialRequest, getSerialSuccess, getSerialFailure } from 'actions/show';

const serial = handleActions(
  {
    [getSerialSuccess]: (state, action) => ({ ...state, ...action.payload }),
  },
  {},
);

const isLoading = handleActions(
  {
    [getSerialRequest]: () => true,
    [getSerialSuccess]: () => false,
    [getSerialFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [getSerialFailure]: (_, action) => action.error,
  },
  null,
);


export default combineReducers({
  serial,
  isLoading,
  error
})
