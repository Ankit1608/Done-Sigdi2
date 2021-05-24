import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  Switch,
} from 'react-native';

export default class SellerOrderCard extends Component {
  state = {
    switch: true,
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            overflow: 'hidden',
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            opacity: this.state.switch ? 1 : 0.5,
          }}>
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
            <Switch
              value={this.state.switch}
              onValueChange={(value) => this.setState({switch: value})}
              trackColor={{true: '#fccf08'}}
              thumbColor={this.state.switch ? '#fccf08' : '#f4f3f4'}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <View style={styles.editContainer}>
                  <Image
                    style={{height: 20, width: 20, resizeMode: 'contain'}}
                    source={require('../assets/edit.png')}
                  />
                  <Text style={styles.deleteText}>Edit</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
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

  deleteContainer: {
    justifyContent: 'space-around',
  },
  deleteText: {
    paddingRight: 10,
    color: '#838383',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  editContainer: {
    flexDirection: 'row',
    marginRight: 5,
  },
});
