import store from "../datastores/store";
const makePayments = async (amount) => {

   
    const userId = store.getState().userId;
    const jsonWebToken = store.getState().jsonWebToken;  
   
    
    const response = await my.request({
      url: "https://itu-celeste-app.herokuapp.com/payment",
      method: "POST",
      headers:{authorization: `Bearer ${jsonWebToken}`},
      data: { userId, amount}
    });
 
  my.tradePay({
      paymentUrl: response.data.redirectActionForm.redirectUrl,
      success: (res) => {
        if (res.resultCode == "9000") {
           my.alert({
           content:  res.resultCode = "Payment Successful.",
        });
          my.redirectTo({ url: "/pages/thankYou/thankYou"});
        }

         else  {
           my.alert({
           content:  res.resultCode = "Payment Failed. please try again.",
        });
          
        }
       
      }
     
     
    });


    // if (res.resultCode == "Payment successful")
    // my.redirectTo({ url: "/pages/thankYou/thankYou"});
  return response
  }

export {makePayments} ;