import store from '../../datastores/store'

Component({
  mixins: [],
  data: {},
  props: {
     count: 1,
    constraints: [0, 10]
  },
  didMount() {
    this.setData({ count: this.props.count });
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    placeOrder() {
      let count = this.data.count;
      if (count !== 0) {
        my.navigateTo({ url: "/pages/summary/summary?selection=" + JSON.stringify(count )});
      }
    },

 increase() {
   //
     let count =  store.getState().count;
      store.dispatch({ type: 'counterIncremented'});
      const [, max] = this.props.constraints;
 
      if (max >= count) {
     this.setData({count})
      }
    
    },
    decrease() {
       store.dispatch({ type: 'counterDecremented' })
        let count = store.getState().count;
      this.setData({ count });
    }
  }
});
