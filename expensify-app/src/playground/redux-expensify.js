










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