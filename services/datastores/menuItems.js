import store from "./store";


const initializeMenu = async () => {

 const response = await my.request({
    url: "http://localhost:3000/menu",
    method: "GET",
  });

  const menuItems = response.data;
  
  store.dispatch({ type: "menuItemsAdded", payload: menuItems });

  return response;
};

export { initializeMenu};