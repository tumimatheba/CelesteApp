import store from "./store";


const initializePrice = async () => {

 const response = await my.request({
    url: "http://localhost:3000/price",
    method: "GET"
  });

  const price = response.data.price;
  
  store.dispatch({ type: "priceAdded", payload: price });
 


  return response;
};

export { initializePrice };