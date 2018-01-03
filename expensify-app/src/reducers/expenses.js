// Reducers creation
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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