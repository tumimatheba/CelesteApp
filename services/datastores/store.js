import { createStore } from 'redux'

function initialDataReducer(
  state = { count: 1, pricePerPerson: 0, menuItems: [] },
  action
) {

  switch (action.type) {
    case "priceAdded":
      return {
        ...state,
        
        pricePerPerson: action.payload
      };
    case "menuItemsAdded":
      return {
        ...state,
        menuItems: action.payload
      };

    case 'counterIncremented':
      return {
        ...state,
        count: state.count + 1
      };
    case "counterDecremented":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}


let store = createStore(initialDataReducer)

export default store;