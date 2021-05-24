import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class SellerOrderCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={this.props.image} style={styles.img} />
          <View style={styles.detailscontainer}>
            <View style={styles.namecontainer}>
              <Image source={this.props.mark} style={styles.mark} />
              <Text style={styles.itemname}>{this.props.name}</Text>
            </View>
            <Text style={styles.foodtype}>in Gravey</Text>
            <View style={styles.pricecontainer}>
              <Image
                source={require('../assets/rupeesymbol.png')}
                style={styles.symbol}
              />
              <Text style={styles.pricetext}>{this.props.price}</Text>
            </View>
            {this.props.stock < 3 && (
              <Text style={styles.stock}>
                Only {this.props.stock} Left in Stock
              </Text>
            )}
          </View>

          <View style={styles.deleteContainer}>
            <TouchableOpacity>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
    overflow: 'hidden',
    alignContent: 'center',
    //alignItems:"center",
    marginTop: 30,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  img: {
    height: 100,
    width: 100,
    borderRadius: 15,
    marginRight: 20,
  },

  detailscontainer: {
    marginRight: 15,
    justifyContent: 'center',
  },

  namecontainer: {
    flexDirection: 'row',
  },

  mark: {
    height: 16,
    width: 16,
    marginRight: 5,
  },

  itemname: {
    fontWeight: 'normal',
  },

  foodtype: {
    color: '#838383',
    fontSize: 12,
  },

  pricecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5,
  },

  symbol: {
    height: 10,
    width: 10,
    marginRight: 1,
    resizeMode: 'contain',
  },

  pricetext: {
    color: '#068542',
    fontWeight: 'normal',
    fontSize: 16,
  },

  stock: {
    color: '#710F11',
    fontSize: 12,
  },

  deleteContainer: {
    justifyContent: 'center',
  },
  deleteText: {
    paddingRight: 10,
    color: '#838383',
  },
});
