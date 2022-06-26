import store from "../../services/datastores/store";

Page({
  data: {
  },
  onLoad() {
    const customer = store.getState().userName;
    const email = store.getState().userEmail;
    const table = 1 + Math.floor(Math.random() * 19)
    this.setData({ customer });
    this.setData({ email });
    this.setData({ table });
  },

  goHome() {
    my.reLaunch({
      url: "/pages/index/index"
    });
  }
});
