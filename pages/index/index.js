import {getAuthCode} from '../../services/auth/authoutization'
import { request } from '../../services/auth/request';

Page({

  textClick() {
      getAuthCode();
    my.navigateTo({ url: "/pages/menu/menu" });
  }
});
