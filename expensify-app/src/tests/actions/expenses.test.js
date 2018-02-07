// yarn test -- --watch
import configureMockStore from 'redux-mock-store';
import thunk from'redux-thunk';
import { 
  addExpense, 
  editExpense, 
  removeExpense, 
  setExpenses, 
  startAddExpense, 
  startSetExpenses, 
  startRemoveExpense, 
  startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

// creating a mock store and pass in a middleware
const uid = 'whatever-uid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

// put done here so that we can call done() after fb call is done
beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => { done() });
})a


test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { description: 'blah'});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: { description: 'blah' }
  })
})


test('should setup add expense action object', () => {
  const action = addExpense(expenses[2]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

// 'done' here is for async test, u need to explicitly call done
test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    // return a promise, to pass into the promise chain below (then)
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    // moved done from dispatch inside callback for firebase call, to ensure done is called at end of function
    done();
  });
  
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseDefaults = {
    description: '', 
    note: '', 
    amount: 0, 
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  })
})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done();
  })
})

test('should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startRemoveExpense({ id: expenses[0].id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      id: expenses[0].id,
      type: 'REMOVE_EXPENSE'
    })
    return database.ref(`users/${uid}/expenses/${expenses[0].id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy(); // assert that it's null or undefined
    done();
  })
})

test('should edit expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const updates = {
    amount: 3000,
  };
  const id = expenses[0].id

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
  })
});