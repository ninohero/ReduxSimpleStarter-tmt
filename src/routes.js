import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './layout/app';
import LocalStorage from 'store';

// Pages
import Home from './containers/ProjectList';

//import Home from './contracts/reinsurance/List';// Pages
import ProjectInfo from './containers/ProjectInfo';
import ProjectResources from './containers/ProjectResources';
import NonResourceBudget from './containers/NonResourceBudget';
import ProjectSummary from './containers/ProjectSummary';

export default function Routes( store ) {
  <Route path="/" component={Layout} >
        <IndexRoute component={Home} />
        <Route path="projects">
          <Route path="new/:projectId" component={ProjectInfo} />
          <Route path="resources/:projectId" component={ProjectResources} />
          <Route path="non-resource/:projectId" component={NonResourceBudget} />
          <Route path="summary/:projectId" component={ProjectSummary} />
        </Route>
  </Route>
}
