import store from "./store";


const initializeMenu = async () => {

 const response = await my.request({
    url: "https://itu-celeste-app.herokuapp.com/menu",
    method: "POST",
  });

  const menuItems = response.data;
  store.dispatch({ type: "menuItemsAdded", payload: menuItems });

  return response;
};

export { initializeMenu};