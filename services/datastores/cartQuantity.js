import { createStore } from 'redux'

function counterReducer(state = { count: 1 }, action) {
  switch (action.type) {
    case 'couterIncremented':
      return { count: state.count + 1 }
    case 'counter/decremented':
      return { count: state.count - 1 }
    default:
      return state
  }
}

let store = createStore(counterReducer)

export default store;