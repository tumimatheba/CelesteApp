import store from "./store";


const initializePrice = async () => {
const merchantId = "216620000000188034591"
 const response = await my.request({
    url: "https://itu-celeste-app.herokuapp.com/price",
    method: "POST",
     data: {
     merchantId
    }
  });

  const price = response.data.price;
  
  store.dispatch({ type: "priceAdded", payload: price });
 


  return response;
};

export { initializePrice };