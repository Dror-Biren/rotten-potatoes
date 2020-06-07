import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DashboardPage from '../components/DashboardPage';
import AddMoviePage from '../components/AddMoviePage';
import ViewMoviePage from '../components/ViewMoviePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
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
