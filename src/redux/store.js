import { createStore, applyMiddleware,compose  } from 'redux';
import ReduxThunk from 'redux-thunk'

import reducers from './rootReducer';
import reduxLoger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [ReduxThunk, reduxLoger]

export default function (initailState = {}) {
  const store = createStore(
    reducers,
    initailState,
    composeEnhancers(applyMiddleware(...middlewares))

  );

  return store;
}