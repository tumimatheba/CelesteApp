import store from '../../services/datastores/store'

Page({
  data: {
    tips: [
      { percentage: 0.1, value: "10%" },
      { percentage: 0.2, value: "20%" },
      { percentage: 0.3, value: "30%" },
      { percentage: 0, value: "custom" }
    ],
    tip: 0
  },

  onLoad() {
    let tip = this.data.tip;
    this.setData({ tip });
    const pricePerPerson = store.getState().pricePerPerson;
    this.setData({ pricePerPerson });
    let people = store.getState().count;
    this.setData({ people })
    const cost = (people * this.data.pricePerPerson)
    this.setData({ cost });
    let total = cost;
    this.setData({ total });
  },

  radioChange(e) {
    let percentage = e.detail.value;
    this.setData({ percentage });
    let tip = this.data.tip;
    let cost = parseFloat(this.data.cost);

    if (percentage !== 0) {
      tip = cost * percentage;
      this.setData({ tip });
    } else {
      this.bindKeyInput(e);
    }
  },

  bindKeyInput(e) {
    let tip = parseFloat(e.detail.value);
    this.setData({ tip });

    if (tip < 0 || isNaN(tip)) {
      my.alert({
        content: "Please enter appropriate tip amount",
        buttonText: "OK"
      });
    }
  },

  async makePayment() {
    const total = this.data.total + this.data.tip;
    const amount = total.toFixed(2).split('.').join('')
    const userId = store.getState().userId;

    const response = await my.request({
      url: "https://itu-celeste-app.herokuapp.com/payment",
      method: "POST",
      data: { userId,amount }

    });

    my.tradePay({
      paymentUrl: response.data.redirectActionForm.redirectUrl,
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
        });
      },
      fail: (res) => {
        my.alert({
          content: JSON.stringify(res),
        });
      }
    });

    my.navigateTo({ url: "/pages/thankYou/thankYou" });
  }
});
