import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './expense-list-item';
import selectExpenses from '../selectors/expenses';

// adding named export here to test dynamic component without connect
export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />
        })
      )
    }
    
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);