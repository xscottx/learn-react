import moment from 'moment';

// Get visible expenses
// JS toLowerCase() lowers strings, and .includes() checks if the text is inside string
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

  return expenses.filter((expense) => {
    // create a moment for expense and filter on dates before or after the start/end date match.
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
    
  })
}

export default getVisibleExpenses;