import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DashboardPage from '../components/pages/DashboardPage';
import AddMoviePage from '../components/pages/AddMoviePage';
import ViewMoviePage from '../components/pages/ViewMoviePage';
import NotFoundPage from '../components/pages/NotFoundPage';
import LoginPage from '../components/pages/LoginPage';
import SitePage from './SitePage';
import { themesClassesNames } from './../appConsts';

export const history = createHistory();

export const AppRouter = ({ themeClassName }) => (
   <Router history={history}>
      <div className={`site-background ${themeClassName}`}>
         <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <SitePage path="/dashboard" component={DashboardPage} />
            <SitePage path="/create" component={AddMoviePage} />
            <SitePage path="/view/:id" component={ViewMoviePage} />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   </Router>

);

const mapStateToProps = (state) => ({
   themeClassName: themesClassesNames[state.user.themeIndex]
});

export default connect(mapStateToProps)(AppRouter);
