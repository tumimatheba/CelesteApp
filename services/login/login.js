// import store from "./store";


// const userLogin = async () => {

//  const response = await my.request({
//     url: "http://localhost:3000/auth",
//     method: "POST"
//   });

//   const price = response.data.price;
  
//   store.dispatch({ type: "getAuthCode", payload: price });
 


//   return response;
// };

// export { userLogin};

const userLogin = async () => {

 const response = await my.request({
    url: "http://localhost:3000/auth",
    method: "POST",
    data: {
       authCode: "0000000001CY1DNEOOo876cU00252263"
     }
  });

  // const price = response.data.price;
  
  // store.dispatch({ type: "getAuthCode", payload: price });
 
console.log(response)

  return response;
};

 export { userLogin};
