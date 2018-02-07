import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/login';
import ExpenseDashboardPage from '../components/dashboard';
import AddExpensePage from '../components/add-expense';
import EditExpensePage from '../components/edit-expense';
import NotFoundPage from '../components/not-found';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';

export const history = createHistory();

// exact will check to find a match one at a time, and not match multiples
// exact is for the root element!
// using History to help w/ authentication routes, so need to use history instead of browser router
const AppRouter = () => (
  <Router history={history}>
  <div>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
      <PrivateRoute path="/create" component={AddExpensePage} />
      <PrivateRoute path="/edit/:id" component={EditExpensePage} />
      <PublicRoute path="" component={NotFoundPage} />
    </Switch>
  </div>
</Router>
)

export default AppRouter;