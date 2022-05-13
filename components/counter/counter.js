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
    buttonClick(event) {
      let count = this.data.count;
      const getNumberOfPeople = getApp();
      getNumberOfPeople.data = { selection: count };

      if (count !== 0) {
        my.navigateTo({ url: "/pages/summary/summary?selection=" + JSON.stringify(count )});
      }
    },

    increase() {
      let count = this.data.count;
      const [, max] = this.props.constraints;

      count = count + 1 > max ? count : ++count;

      this.setData({ count });
    },
    decrease() {
      let count = this.data.count;
      const [min] = this.props.constraints;
      if (count > min) {
        count -= 1;
      }

      this.setData({ count });
    }
  }
});
