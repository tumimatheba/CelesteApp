import store from "../../services/datastores/store";
import  {getAuthCode}  from '../../services/auth/authoutization';
Page({
  data: {
   menuItems: []
      // "Glazed oysters with zucchini pearls and sevruga caviar",
      // "Wine pairing: kleine zalze brut rose",
      // "Seared anhi tuna with provincial vegetables and tapenade croutons",
      // "Wine pairing: bizoe semillon",
      // "Bream with asparagus, tempura mussels and a lime velouté",
      // "Wine pairing:  red city blend",
      // "Aged gouda with espresso, hazelnut and onion",
      // "Wine pairing: thelema early harvest",
      // "Dark chocolate panna cotta with a rhubarb and cherry compote",
      // "Wine pairing: clarington sauvignon blanc"
    
  },

  onLoad() {




  
const menuItems = store.getState().menuItems;

this.setData({menuItems})
  },



});
