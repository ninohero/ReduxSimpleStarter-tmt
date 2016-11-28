import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
//import promiseMiddleware from 'redux-promise-middleware';
import persistState from 'redux-localstorage';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import Routes from './routes';

// Pages
import ProjectList from './containers/ProjectList';
import {PageNotFound} from './layout/PageNotFound';
import {ProjectInfo} from './containers/ProjectInfo';
import ProjectResources from './containers/ProjectResources';
import NonResourceBudget from './containers/NonResourceBudget';
import ProjectSummary from './containers/ProjectSummary';


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
//

//         <Route path="resources/:projectId" component={ProjectResources} />
//         <Route path="non-resource/:projectId" component={NonResourceBudget} />
//         <Route path="summary/:projectId" component={ProjectSummary} />

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={App} >
        <IndexRoute component={ProjectInfo} />
        <Route path="/projects" component={ProjectInfo} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.mainContainer'));
