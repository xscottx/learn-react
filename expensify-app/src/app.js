import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/app-router';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'; // wont work bc we are just using scss, need to update webpack.config.js
import './styles/styles.scss';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { setTimeout } from 'core-js/library/web/timers';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const store = configureStore();

// Assignment:
// addExpense -> Water bill
// addExpense -> Gas bill
// setTextfilter -> bill (2 items) -> water (1 item)
// getVisibleExpenses -> print visible ones to screen

// Answer:
const expenseOne = store.dispatch(addExpense({description: 'Water bill', note: 'my water bill', amount: 4500}));
const expenseTwo = store.dispatch(addExpense({description: 'Gas bill', note: 'my gas bill', amount: 1000, createdAt: 999}));
const expenseThree = store.dispatch(addExpense({description: 'Rent', note: 'my rent', amount: 109500}));

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'))
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(store.getState());
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));