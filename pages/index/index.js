import { userLogin } from '../../services/login'

Page({
  async  onLoad() {
    await userLogin();
  },
  seeMenu() {
    my.navigateTo({ url: "/pages/menu/menu" });
  }
});


