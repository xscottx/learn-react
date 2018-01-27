
const getExpensesTotal = (expenses) => {
  // 1. map expense to expense.amount [expense0, expense1] -> [195, 20]
  // 2. reduce expense amounts to summation [195, 20] -> 215
  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0)
};

export default getExpensesTotal;