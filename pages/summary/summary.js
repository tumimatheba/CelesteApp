// import store from '/services/datastores/cartQuantity'
import store from '../../services/datastores/store'



Page({
  data: {
    // pricePerPerson: 0,

    tips: [
      { percentage: 0.1, value: "10%"},
      { percentage: 0.2, value: "20%"  },
      { percentage: 0.3, value: "30%" },
      { percentage: 0, value: "custom"}
    ],

    tip: 0
  },

  onLoad() {
    let tip = this.data.tip;
    this.setData({ tip });
const pricePerPerson = store.getState().pricePerPerson;
this.setData({pricePerPerson});
     let people = store.getState().count;
     this.setData({people})
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
      // let total = (cost + parseFloat(tip)).toFixed(2);
      // this.setData({ total });
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
    } else {
      // let total = parseFloat(this.data.cost) + parseFloat(tip);
      // this.setData({ total });
    }
  },

  buttonTap() {
    my.navigateTo({ url: "/pages/thankYou/thankYou" });
  }
});
