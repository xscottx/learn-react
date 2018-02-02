import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/login';
import ExpenseDashboardPage from '../components/dashboard';
import AddExpensePage from '../components/add-expense';
import EditExpensePage from '../components/edit-expense';
import HelpPage from '../components/help';
import NotFoundPage from '../components/not-found';
import Header from '../components/header';

export const history = createHistory();

// exact will check to find a match one at a time, and not match multiples
// exact is for the root element!
// using History to help w/ authentication routes, so need to use history instead of browser router
const AppRouter = () => (
  <Router history={history}>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/dashboard" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
</Router>
)

export default AppRouter;