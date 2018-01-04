// Export a stateless functional component
// description, amount, createdAt value
import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({id}))}}>Remove</button>
  </div>
)

// don't need anything in state other than the given 'dispatch'
export default connect()(ExpenseListItem);