import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

// use a class only if u use state
export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  onSortChange = (e) => {
    if (e.target.value === "date") {
      this.props.sortByDate(e.target.value);
    } else if (e.target.value === "amount") {
      this.props.sortByAmount(e.target.value);
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input 
              type="text" 
              className="text-input"
              placeholder="Search expenses"
              value={this.props.filters.text} 
              onChange={this.onTextChange} 
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker 
              startDateId='startDate'
              endDateId='endDate'
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    )
  }
}

// OLD: stateless functional component
// const ExpenseListFilters = (props) => (
//   // write to store w/ the input form field
//   <div>
//     <input 
//       type="text" 
//       value={props.filters.text} 
//       onChange={(e) => {
//         props.dispatch(setTextFilter(e.target.value));
//       }} 
//     />
//     <select
//       value={props.filters.sortBy}
//       onChange={(e) => {
//         if (e.target.value === "date") {
//           props.dispatch(sortByDate(e.target.value));
//         } else if (e.target.value === "amount") {
//           props.dispatch(sortByAmount(e.target.value));
//         }
//       }}
//     >
//       <option value="date">Date</option>
//       <option value="amount">Amount</option>
//     </select>
//   </div>
// )

const mapStateToProps = (state) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);