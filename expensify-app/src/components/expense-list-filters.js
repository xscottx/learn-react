import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
          }} 
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate(e.target.value));
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount(e.target.value));
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
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

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);