import { getAuthCode } from '../services/auth/authoutization'
import store from "../datastores/store";


const userLogin = async () => {
  const authCode = await getAuthCode();
  const merchantId = "216620000000188034591"

  const response = await my.request({
    url: "https://itu-celeste-app.herokuapp.com/auth",
    method: "POST",
    data: {
      authCode, merchantId
    }
  });

  const userDetails = {
    name: response.data.userInfo.userInfo.nickName,
    email: response.data.userInfo.userInfo.contactInfos[0].contactNo,
    userId: response.data.userInfo.userInfo.userId
  }

  const jsonWebToken = response.data.jsonWebToken;
  store.dispatch({ type: "getUserDetails", payload: userDetails });
  store.dispatch({ type: "getjsonWebToken", payload: jsonWebToken });
  return response
}

export { userLogin };
