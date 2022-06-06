
import store from '../../services/datastores/store'
import { paymentRequest } from '../../services/pay/payment';


Page({
  data: {
    // pricePerPerson: 0,

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
    console.log(people)
    const cost = (people * this.data.pricePerPerson)
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

  makePayment() {
    // paymentRequest();
    my.navigateTo({ url: "/pages/thankYou/thankYou" });
  }
});
