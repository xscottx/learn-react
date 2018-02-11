import React from 'react';
import moment from 'moment'; // http://momentjs.com/docs/#/displaying/
import {SingleDatePicker} from 'react-dates'; // https://github.com/airbnb/react-dates
import {Link} from 'react-router-dom';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    // https://regex101.com/
    if (!amount || amount.match(/^\d{1,}(\.?\d{0,2})$/)) {
      this.setState(() => ({amount}));
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  onSubmit = (e) => {
    e.preventDefault(); // will prevent browser from doing full page refresh

    if (!this.state.description || !this.state.amount) {
      // Set error state equal to 'Please provide description and amount'
      this.setState(() => ({ error: 'Please provide description and amount'}));
    }
    else {
      // Clear the error 
      this.setState(() => ({ error: '' }));
      // instead of doing work inside expenseform, we fire props.onSubmit to allow AddExpense & EditExpense to use
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <div>
        <div className="button__container">
          <Link to="/dashboard" className="button button--form-link">Go Back</Link>
        </div>
        <form className="form" onSubmit={this.onSubmit} >
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input 
            className="text-input"
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            className="text-input"
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false }
            block
          />
          <textarea
            className="textarea"
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <div>
            <button className="button">
              Save Expense
            </button>
          </div>
        </form>
      </div>
    )
  }
}