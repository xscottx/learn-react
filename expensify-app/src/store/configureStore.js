import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Store creation
export default () => {
  // combineReducers creates a key/value map of reducers
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }));

  return store;
}


