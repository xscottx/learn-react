import React from 'react';
import ExpenseForm from './expense-form';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

// avoid in-line functions by moving over to class based components
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm 
//       onSubmit={(expense) => {
//         // leverage props.dispatch from redux to dispatch an action creator (addExpense)
//         // props.dispatch(addExpense(expense));
//         props.onSubmit(expense);
//         // leverage the history props from redux
//         props.history.push('/');
//       }}
//     />
//   </div>
// )

// New way - function 
const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

// Old way - function that returns an object, can reduce to above to implicitly return object
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (expense) => dispatch(addExpense());
//   }
// }

// need to use connect to get access to props.dispatch (HOC)
export default connect(undefined, mapDispatchToProps)(AddExpensePage);