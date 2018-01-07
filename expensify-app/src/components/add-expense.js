import React from 'react';
import ExpenseForm from './expense-form';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        // leverage props.dispatch from redux to dispatch an action creator (addExpense)
        props.dispatch(addExpense(expense));
        // leverage the history props from redux
        props.history.push('/');
      }}
    />
  </div>
)

// need to use connect to get access to props.dispatch (HOC)
export default connect()(AddExpensePage);