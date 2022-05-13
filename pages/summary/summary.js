Page({
  data: {
    perPerson: 100,

    tips: [
      { percentage: 0.1, value: "10%" },
      { percentage: 0.2, value: "20%" },
      { percentage: 0.3, value: "30%" },
      { percentage: 0, value: "custom" }
    ],

    tip: 0
  },

  onLoad() {
    let custom = this.data.tips[3].percentage;
    this.setData({ custom });
    console.log(custom);
    let tip = this.data.tip;
    const people = getApp().data.selection;
    this.setData({ selection: people });

    const cost = people * this.data.perPerson;
    this.setData({ cost });
    let total = cost;
    this.setData({ total });
  },

  radioChange(e) {
    let percentage = e.detail.value;
    let tip = this.data.tip;
    let custom = this.data.custom;

    if (percentage != 0) {
      custom = 0;
      this.setData({ custom });
      tip = this.data.cost * percentage;
      this.setData({ tip });
      let total = this.data.cost + this.data.tip;

      this.setData({ total });
    } else {
      this.bindKeyInput(e);
      custom = 1;
      this.setData({ custom });
    }
  },

  bindKeyInput(e) {
    let tip = parseFloat(e.detail.value);
    if (tip < 0 || isNaN(tip)) {
      my.alert({
        content: "Please enter appropriate tip amount",
        buttonText: "OK"
      });
    } else {
      this.setData({ tip });
      let total = this.data.cost + tip;
      this.setData({ total });
    }
  },

  buttonTap() {
    my.navigateTo({ url: "/pages/ThankYou/ThankYou" });
  }
});
