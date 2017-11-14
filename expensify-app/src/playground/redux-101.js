import { createStore } from 'redux';

// Action creators - functions that return action objects
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
})
// same as incrementBy = incrementBy

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const set = ({count = 0} = {}) => ({
  type: 'SET',
  count
})

const reset = () => ({type: 'RESET'})

// Reducers
// 1. reducers are pure functions
//    - the output is purely determined by the input
// 2. never change state or action

let a = 10;
// NOT A PURE FUNCTION! bc it depends on something outside of input
const add = (b) => {
  return a + b;
}
let result;
// NOT A PURE FUNCTION! bc it changes a variable outside
const add2 = (a, b) => {
  result = a + b;
}

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
}
// values passed into function are stored inside 'action' object
// previous state passed into function are stored in 'state' object
const store = createStore(countReducer);

// subscribe/unsubscribe to changes in the store via toggle
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Actions - nothing more than an object that gets sent to the store
// stores are sent via 'dispatch'
// 'type' is a required property
store.dispatch(incrementCount({incrementBy: 5}));

// unsubscribe(); // will toggle off store update subscriptions

// store.dispatch({
//   type: 'INCREMENT'
// });

store.dispatch(reset());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(set({count: 101}));