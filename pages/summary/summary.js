import store from '../../datastores/store'
import { makePayments } from '../../services/payment'

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
    let tip = Math.abs(parseFloat(e.detail.value));
    this.setData({ tip });
  },

  async makePayment() {
    const total = this.data.total + this.data.tip;
    const amount = (total * 100).toString();
    const pay = await makePayments(amount);
    return pay
  }
});
