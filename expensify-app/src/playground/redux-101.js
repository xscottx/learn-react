import { createStore } from 'redux';

// values passed into function are stored inside 'action' object
// previous state passed into function are stored in 'state' object
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
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
});

// subscribe/unsubscribe to changes in the store via toggle
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Actions - nothing more than an object that gets sent to the store
// stores are sent via 'dispatch'
// 'type' is a required property
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

// unsubscribe(); // will toggle off store update subscriptions

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 4
});

store.dispatch({
  type: 'SET',
  count: 101
});