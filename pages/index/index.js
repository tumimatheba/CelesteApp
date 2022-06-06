import {getAuthCode} from '../../services/auth/authoutization'

Page({

  textClick() {
      getAuthCode();
    my.navigateTo({ url: "/pages/menu/menu" });
  }
});
