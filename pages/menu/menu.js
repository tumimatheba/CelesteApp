import store from "../../datastores/store";

Page({
  data: {
    menuItems: []
  },

  onLoad() {
    const menuItems = store.getState().menuItems;
    this.setData({ menuItems })
  },
});
