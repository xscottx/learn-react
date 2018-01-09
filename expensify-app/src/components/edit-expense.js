import React from 'react';
import ExpenseForm from './expense-form';
import {connect} from 'react-redux';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.match.params.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  )
}

// need to set up mapStateToProps because we want to pass values to component, have access to props in the 2nd argument
// adding expense prop to HOC
// leverage find to find a single item if the id matches
// if an expression is being returned can just use shorthand arrow function to return the expression
//  old school:  (expense) => { return return expense.id === props.match.params.id; }
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage);