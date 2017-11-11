import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/dashboard';
import AddExpensePage from '../components/add-expense';
import EditExpensePage from '../components/edit-expense';
import HelpPage from '../components/help';
import NotFoundPage from '../components/not-found';
import Header from '../components/header';

// exact will check to find a match one at a time, and not match multiples
// exact is for the root element!
const Approuter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
</BrowserRouter>
)

export default Approuter;