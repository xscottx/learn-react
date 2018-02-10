// Export a stateless functional component
// description, amount, createdAt value
import React from 'react';
import {Link} from 'react-router-dom';
import {removeExpense} from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

// removed root 'div' to leverage 'Link' so that everything inside is clickable
const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </div>
      <h3 className="list-item__data">{numeral(amount/100).format('$0,0.00')}</h3>
    </Link>
)

// don't need anything in state other than the given 'dispatch'
export default ExpenseListItem;