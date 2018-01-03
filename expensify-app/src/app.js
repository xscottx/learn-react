import React from 'react';
import ReactDOM from 'react-dom';
import Approuter from './routers/app-router';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'; // wont work bc we are just using scss, need to update webpack.config.js
import './styles/styles.scss';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

// Assignment:
// addExpense -> Water bill
// addExpense -> Gas bill
// setTextfilter -> bill (2 items) -> water (1 item)
// getVisibleExpenses -> print visible ones to screen

// Answer:
const expenseOne = store.dispatch(addExpense({description: 'Water bill', note: 'my water bill', amount: 1000, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Gas bill', note: 'my gas bill', amount: 999, createdAt: 999}));
// const billFilter = store.dispatch(setTextFilter('bill'));
const waterFilter = store.dispatch(setTextFilter('Water'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(store.getState());
console.log(visibleExpenses);

ReactDOM.render(<Approuter />, document.getElementById('app'));