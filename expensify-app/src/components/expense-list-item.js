// Export a stateless functional component
// description, amount, createdAt value
import React from 'react';
import {Link} from 'react-router-dom';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
)

// don't need anything in state other than the given 'dispatch'
export default ExpenseListItem;