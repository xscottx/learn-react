import uuid from 'uuid';
import database from '../firebase/firebase';

// Action creators creation

// Pure react-redux
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// Middleware style
// components calls action generator
// action generator returns function
// component dispatches function
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  })

export const startAddExpense = (expenseData = {}) => {
  // this returns a function, have access to getState from thunk
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData;

    const expense = {description, note, amount, createdAt};

    // this is a function that returns a promise
    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// START_REMOVE_EXPENSE
export const startRemoveExpense = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}));
    })
  }
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// START_EDIT_EXPENSE
export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    })
  }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

// START_SET_EXPENSES
export const startSetExpenses = () => {
  // this returns a function
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    // this is a function that returns a promise
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
        const expenses = [];
      
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        });
      
        dispatch(setExpenses(expenses));
      })
  }
}