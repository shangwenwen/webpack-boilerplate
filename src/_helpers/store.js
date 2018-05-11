import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../_reducers';
import rootSaga from '../_sagas';



export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  /* eslint-disable */
  let middleware = compose(
    applyMiddleware(sagaMiddleware)
  )

  if (process.env.NODE_ENV !== 'production') {
    middleware = compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  }
  /* eslint-enable */

  const store = createStore(rootReducer, middleware);

  sagaMiddleware.run(rootSaga);

  return store;
};
