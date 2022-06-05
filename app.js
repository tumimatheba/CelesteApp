import {initializePrice} from './services/datastores/pricePerPerson'
import {initializeMenu} from './services/datastores/menuItems'

App({
  data: {

  },


  onLaunch(options) {
   initializePrice();
    initializeMenu();

    console.info('App onLaunch');
  },
  onShow(options) {
   
  },
});
