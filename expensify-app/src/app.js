import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, { history } from './routers/app-router';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'; // wont work bc we are just using scss, need to update webpack.config.js
import './styles/styles.scss';
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import { setTimeout } from 'core-js/library/web/timers';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './firebase/firebase';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/loading-page';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// do NOT have a route here to push
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('user logged in', user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      // if user is on / and after login they need to goto /dashboard
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    console.log('user logged out');
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
})