import store from "./store";


const initializePrice = async () => {

 const response = await my.request({
    url: "https://itu-celeste-app.herokuapp.com/price",
    method: "POST"
  });

  const price = response.data.price;
  
  store.dispatch({ type: "priceAdded", payload: price });
 


  return response;
};

export { initializePrice };