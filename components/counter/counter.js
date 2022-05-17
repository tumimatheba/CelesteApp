import store from '/services/datastores/cartQuantity'

Component({
  mixins: [],
  data: {},
  props: {
    count: 1,
    constraints: [0, 60]
  },
  didMount() {
    this.setData({ count: this.props.count });
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    buttonClick() {
      let count = this.data.count;
   
      if (count !== 0) {
        my.navigateTo({ url: "/pages/summary/summary?selection=" + JSON.stringify(count )});
      }
    },


    increase() {
    
      const [, max] = this.props.constraints;
      
    store.dispatch({ type: 'couterIncremented'});
     let count = store.getState().count;
     this.setData({count})
    },
    decrease() {
    
      const [min] = this.props.constraints;
        store.dispatch({ type: 'counter/decremented' })
        let count = store.getState().count;
     

      this.setData({ count });
    }
  }
});
