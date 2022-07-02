import store from "./store";


const initializeMenu = async () => {
const merchantId = "216620000000188034591"
 const response = await my.request({
    url: "https://itu-celeste-app.herokuapp.com/menu",
    method: "POST",
     data: {
       merchantId
    }
  });

  const menuItems = response.data;
  store.dispatch({ type: "menuItemsAdded", payload: menuItems });

  return response;
};

export { initializeMenu};