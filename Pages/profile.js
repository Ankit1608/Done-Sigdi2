import React, {Component} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Image,
  Dimensions,
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Subscribe} from 'unstated';
import StateContainer from '../container/container';

import Tab from './tab';
import Menu from './menu';
import Reviews from './review';
import Share from './share';
import CartPopup from './cartPopup';

const tabs = [
  {id: 'menu', title: 'Menu'},
  {id: 'reviews', title: 'Reviews'},
  {id: 'share', title: 'Share'},
];

class profile extends Component {
  windowWidth = Dimensions.get('window').width;
  popupRef = React.createRef();

  showPopup = () => {
    this.popupRef.show();
  };

  onClosePopup = () => {
    this.popupRef.close();
  };

  render() {
    return (
      <Subscribe to={[StateContainer]}>
        {(statecontainer) => (
          <SafeAreaView style={{overflow: 'hidden'}}>
            <ScrollView>
              <View style={{borderColor: '#ffc408', borderWidth: 2}}>
                <ImageBackground
                  style={{
                    height: 250,
                    width: '100%',
                    resizeMode: 'contain',
                  }}
                  source={require('../assets/cover.png')}></ImageBackground>
              </View>
              <View style={{height: 48}}>
                <Image
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    borderColor: '#ffc408',
                    borderWidth: 2,
                    left: this.windowWidth / 2 - 48,
                    height: 96,
                    width: 96,
                    borderRadius: 100,
                  }}
                  source={require('../assets/cook2.jpg')}
                />
              </View>
              <View
                style={{
                  borderBottomWidth: 4,
                  borderBottomColor: '#eaeaea',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                  paddingBottom: 20,
                }}>
                <View
                  style={{
                    marginHorizontal: 10,
                    paddingBottom: 5,
                    borderBottomColor: '#eaeaea',
                    borderBottomWidth: 1,
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    Shivams Kitchen
                  </Text>
                  <Text>North Indian, Punjabi</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>Madhapur</Text>
                    <Text> |</Text>
                    <Text>3.0 km</Text>
                  </View>
                  <Text>Open Now</Text>
                </View>

                <View style={{justifyContent: 'center', marginHorizontal: 10}}>
                  <View>
                    <Text>stars</Text>
                  </View>
                  <View>
                    <Text>time</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  marginHorizontal: 10,
                  marginTop: 10,
                  borderBottomWidth: 4,
                  borderBottomColor: '#eaeaea',
                  paddingBottom: 20,
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, paddingBottom: 5}}>
                  About
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A eni
                  scelerisque id id. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. A eni celerisque id id.
                </Text>
              </View>
              <Tab tabs={tabs}>
                <Menu />
                <Reviews />
                <Share />
              </Tab>
            </ScrollView>

            {statecontainer.state.totalAmount > 0 && (
              <View style={styles.footerContainer}>
                <TouchableWithoutFeedback onPress={this.showPopup}>
                  <View style={styles.cartContainer}>
                    <View>
                      <Text style={styles.cartItemText}>1ITEM</Text>
                      <Text style={styles.cartItemPrice}>
                        Rs. {statecontainer.state.totalAmount}plustaxes
                      </Text>
                    </View>
                    <View style={styles.cartViewContainer}>
                      <Text style={styles.cartView}>View Cart {'>'}</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
                <CartPopup
                  ref={(target) => (this.popupRef = target)}
                  onTouchOutside={this.onClosePopup}></CartPopup>
              </View>
            )}
          </SafeAreaView>
        )}
      </Subscribe>
    );
  }
}

export default profile;

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FCCF08',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  cartItemText: {
    color: '#ffffff',
  },
  cartItemPrice: {
    color: '#ffffff',
  },
  cartView: {
    color: '#ffffff',
  },
  cartViewContainer: {
    justifyContent: 'center',
  },
  footerContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});
