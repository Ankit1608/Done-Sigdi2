import {Container} from 'unstated';

class StateContainer extends Container {
  state = {
    listing: [
      {
        id: 1,
        image: require('../assets/kadhi.png'),
        mark: require('../assets/veg.png'),
        name: 'Rajma Bowl',
        price: 50,
        quantity: 0,
        stock: 5,
      },

      {
        id: 2,
        image: require('../assets/kadhi.png'),
        mark: require('../assets/veg.png'),
        name: 'Rajma Bowl',
        price: 70,
        quantity: 0,
        stock: 2,
      },

      {
        id: 3,
        image: require('../assets/kadhi.png'),
        mark: require('../assets/veg.png'),
        name: 'Rajma Bowl',
        price: 100,
        quantity: 0,
        stock: 1,
      },
    ],
    totalAmount: 0,
    deliveryTip: 0,
  };

  increment = (item) => {
    const listing = [...this.state.listing];
    const index = listing.indexOf(item);
    let totalAmount = this.state.totalAmount;
    listing[index] = {...item};
    listing[index].quantity++;
    totalAmount = totalAmount + listing[index].price;
    this.setState({listing: listing, totalAmount: totalAmount});
  };
  decrement = (item) => {
    const listing = [...this.state.listing];
    const index = listing.indexOf(item);
    let totalAmount = this.state.totalAmount;
    listing[index] = {...item};
    listing[index].quantity--;
    totalAmount = totalAmount - listing[index].price;
    this.setState({listing: listing, totalAmount: totalAmount});
  };
  itemlist = () => {
    let list = [];
    for (let i = 0; i < this.state.listing.length; i++) {
      if (this.state.listing[i].quantity > 0) {
        list.push(this.state.listing[i]);
      }
    }
    return list;
  };

  setDeliveryTip = (temp) => {
    this.setState({deliveryTip: temp});
  };
}
export default StateContainer;
