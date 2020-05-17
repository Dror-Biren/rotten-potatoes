import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import AddMoviePage from '../components/AddMoviePage';
import ViewMoviePage from '../components/ViewMoviePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import SitePage from './SitePage';
import PublicRoute2 from './PublicRoute2';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div className="app-background">
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <SitePage path="/dashboard" component={DashboardPage} />
        <SitePage path="/create" component={AddMoviePage} />
        <SitePage path="/view/:id" component={ViewMoviePage} />
        <SitePage component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
