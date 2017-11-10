import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css'; // wont work bc we are just using scss, need to update webpack.config.js
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
)

const AddExpensePage = () => (
  <div>
    This is from my add expense page
  </div>
)

const EditExpensePage = () => (
  <div>
    This is from my edit expense page
  </div>
)

const HelpPage = () => (
  <div>
    This is from my help page
  </div>
)

const NotFoundPage = () => (
  <div>
    404!
  </div>
)

const routes = (
  <BrowserRouter>
    // will check to find a match one at a time, and not match multiples
    <Switch>
      // exact is for the root element!
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('app'));