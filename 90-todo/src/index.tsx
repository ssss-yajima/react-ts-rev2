import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import App from './App';
// import rootSaga from './sagas/github';
import * as serviceWorker from './serviceWorker';
import taskListReducer from './reducers/taskList';

// import './index.css';

// const sagaMiddleWare = createSagaMiddleware();
// const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;
const composeReduxDevToolsEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  taskListReducer,
  composeReduxDevToolsEnhancers(applyMiddleware()),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
// sagaMiddleWare.run(rootSaga);
