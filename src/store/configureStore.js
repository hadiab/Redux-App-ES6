import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

export default (initialState) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant(), thunk, logger)
  );
}