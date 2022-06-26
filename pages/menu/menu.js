import store from "../../services/datastores/store";

Page({
  data: {
    menuItems: []
  },

  onLoad() {
    const menuItems = store.getState().menuItems;
    this.setData({ menuItems })
  },
});
