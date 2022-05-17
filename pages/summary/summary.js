import store from '/services/datastores/cartQuantity'
Page({
  data: {
    perPerson: 100,

    tips: [
      { percentage: 0.1, value: "10%"},
      { percentage: 0.2, value: "20%"  },
      { percentage: 0.3, value: "30%" },
      { percentage: 0, value: "custom"}
    ],

    tip: (0).toFixed(2)
  },

  onLoad() {
    let tip = this.data.tip;
    this.setData({ tip });

     let people = store.getState().count;
     this.setData({people})
    const cost = (people * this.data.perPerson) 
    this.setData({ cost });
    let total = cost;
    this.setData({ total });
  },

  radioChange(e) {
    let percentage = e.detail.value;
    
    console.log(percentage)
    this.setData({ percentage });
    let tip = this.data.tip;
   let cost = parseFloat(this.data.cost);

    if (percentage !== 0) {
      tip = cost * percentage;
      this.setData({ tip });
      // let total = (cost + parseFloat(tip)).toFixed(2);
      // this.setData({ total });
    } else {
      this.bindKeyInput(e);
    }
  },

  bindKeyInput(e) {
    let tip = e.detail.value;
    this.setData({ tip });

    if (tip < 0 || isNaN(tip)) {
      my.alert({
        content: "Please enter appropriate tip amount",
        buttonText: "OK"
      });
    } else {
      // let total = parseFloat(this.data.cost) + parseFloat(tip);
      // this.setData({ total });
    }
  },

  buttonTap() {
    my.navigateTo({ url: "/pages/ThankYou/ThankYou" });
  }
});
