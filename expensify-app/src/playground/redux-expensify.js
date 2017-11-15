import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Action creators creation

// ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({ 
  type: 'SORT_BY_AMOUNT'
})
// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})
// Reducers creation
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // spread operator used to return a new collection without modifying existing state, this appends expense to array
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      // filter out object array inside expenses that do not match the expense id
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      // map will allow you to traverse thru array, and pass in an 'updater' function to make changes if needed
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        }
      })
    default:
      return state;
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      // overrides the text value w/ the passed in action's text
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}

// timestamps (milliseconds)
// January 1st 1970 (unix epoch)
// 33400, 10, -203
// Get visible expenses
// JS toLowerCase() lowers strings, and .includes() checks if the text is inside string
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
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
// Store creation

// combineReducers creates a key/value map of reducers
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// edits by expense id, 2nd value is object
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

const demoState = {
  expenses: [{
    id: 'aoiewjralksjdf;laksdjcmn,',
    description: 'January Rent',
    notes: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

// Spread objects

// const user = {
//   name: 'Jen',
//   age: 24
// }

// console.log({
//   ...user,
//   location: 'Philadelphia',
//   age: 27
// })