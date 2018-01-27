// Export a stateless functional component
// description, amount, createdAt value
import React from 'react';
import {Link} from 'react-router-dom';
import {removeExpense} from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount/100).format('$0,0.00')}
      -
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
)

// don't need anything in state other than the given 'dispatch'
export default ExpenseListItem;