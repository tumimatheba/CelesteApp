Page({
  data: {
    customers: [
      { name: "Schmidt", table: 20, email: "schmidt@gmail.com" },
      { name: "Cece", table: 21, email: "cece@gmail.com" },
      { name: "Winston", table: 22, email: "winston@gmail.com" },
      { name: "Jess", table: 23, email: "jess@gmail.com" },
      { name: "Nick", table: 24, email: "nick@gmail.com" }
    ]
  },
  onLoad() {
    const customer = Math.floor(Math.random() * this.data.customers.length);
    this.setData({ customer });
  },

  goHome() {
    my.reLaunch({
      url: "/pages/index/index"
    });
  }
});
