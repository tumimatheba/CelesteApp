import { getAuthCode } from '../../services/auth/authoutization'
import store from "../../services/datastores/store";

Page({
  async  onLoad() {

    const authCode = await getAuthCode();
    console.log(authCode);
    
    const merchantId = "216620000000188034591"
    const response = await my.request({
      // url: "http://localhost:3000/auth",
       url: "https://itu-celeste-app.herokuapp.com/auth",
      method: "POST",

      data: {
        authCode,merchantId
       
      }
    });
console.log(response.data.userInfo);

    const userDetails = {
      name: response.data.userInfo.userInfo.nickName,
      email: response.data.userInfo.userInfo.contactInfos[0].contactNo,
      userId: response.data.userInfo.userInfo.userId
    }

    store.dispatch({ type: "getUserDetails", payload: userDetails });
    return response
  },
  textClick() {

    my.navigateTo({ url: "/pages/menu/menu" });
  }
});


