import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
//import promiseMiddleware from 'redux-promise-middleware';
import persistState from 'redux-localstorage';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import Routes from './routes';

// Components
import { ProjectList } from './containers/ProjectList';
import { PageNotFound } from './layout/PageNotFound';

import App from './layout/app';
import reducers from './reducers';
import Projects from './reducers/reducer_projects';
import projectForm from './reducers/projectForm';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// For Development
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" defaultIsVisible={ false }>
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

//const history = syncHistoryWithStore(browserHistory, store);

const reducer = combineReducers({
  routing: routerReducer,
  projects: Projects
});

const store = createStore(
  reducer,
  DevTools.instrument()
  //,
  // applyMiddleware(
  //   promiseMiddleware(),
  // )
)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    {/*<Router history={ history }>
      <Route path="/" component={ App } />
      { Routes( store ) }
      <Route path="*" component={ PageNotFound } />
    </Router>
    <DevTools />*/}
  </Provider>
  , document.querySelector('.mainContainer'));
