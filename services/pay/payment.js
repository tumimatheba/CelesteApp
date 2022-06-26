const paymentRequest = async () => {
const response = await my.request({
    url: "http://localhost:3000/pay",
    method: "POST",
    timeout: 30000
  });
 console.log(response);
 
  return response
}
 
// my.tradePay({
//   paymentUrl: response.data // get the payment from the OpenAPI first
//   success: (res) => {
//     my.alert({
//       content: JSON.stringify(res),
//     });
//   },
//   fail: (res) => {
//     my.alert({
//       content: JSON.stringify(res),
//     });
//   }
// });

//   return response;
// };

export {paymentRequest} ;