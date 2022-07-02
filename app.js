import { initializePrice } from './datastores/pricePerPerson'
import { initializeMenu } from './datastores/menuItems'

App({
  data: {},
  onLaunch(options) {
    initializePrice();
    initializeMenu();

    console.info('App onLaunch');
  },
  onShow(options) {
  },
});
