import { createStore } from 'redux'

function initialDataReducer(
  state = {
    count: 1, pricePerPerson: 0, menuItems: [], userName: "",
    userEmail: "",
    userId: ""
  },
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
    case "getUserDetails":
      return {
        ...state,
        userName: action.payload.name,
        userEmail: action.payload.email,
        userId: action.payload.userId
      };

    case "getjsonWebToken":
      return {
        ...state,
        jsonWebToken: action.payload,
      };
    default:
      return state;
  }
}

let store = createStore(initialDataReducer)

export default store;