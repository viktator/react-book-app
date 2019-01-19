import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import reducers from './rootReducer';
import reduxLoger from 'redux-logger'

const middlewares = [ReduxThunk, reduxLoger]

export default function (initailState = {}) {
  const store = createStore(
    reducers,
    initailState,
    applyMiddleware(...middlewares)
  );

  return store;
}