import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/index'
import defaultState from './data/index'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const enhancers = compose(
  applyMiddleware(sagaMiddleware, logger()),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

export const store = createStore(rootReducer, defaultState, enhancers)

sagaMiddleware.run(rootSaga.mySaga)

export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}
