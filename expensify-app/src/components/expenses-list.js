import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './expense-list-item';
import selectExpenses from '../selectors/expenses';

// adding named export here to test dynamic component without connect
export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
    {
      props.expenses.length === 0 ? (
        <div>
          <span className="list-item list-item--message">No expenses</span>
        </div>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />
        })
      )
    }
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);