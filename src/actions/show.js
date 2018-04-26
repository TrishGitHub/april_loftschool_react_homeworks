import { createActions } from 'redux-actions';

const {
  show: { request: getSerialRequest, success: getSerialSuccess, failure: getSerialFailure },
} = createActions(
  {
    SHOW: { REQUEST: null, SUCCESS: null, FAILURE: null },
  },
  { namespace: '_' },
);

export { getSerialRequest, getSerialSuccess, getSerialFailure };
