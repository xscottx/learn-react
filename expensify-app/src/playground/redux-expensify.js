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
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

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
    default:
      return state;
  }
}

// Store creation

// combineReducers creates a key/value map of reducers
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }));

store.subscribe(() => {
  console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 500}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// edits by expense id, 2nd value is object
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

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

const user = {
  name: 'Jen',
  age: 24
}

console.log({
  ...user,
  location: 'Philadelphia',
  age: 27
})