import React, {useState, useRef} from 'react';
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

function Profile() {
  const windowWidth = Dimensions.get('window').width;
  let popupRef = useRef();
  const showPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef.close();
  };
  const [menu, setMenu] = useState(true);
  const [review, setReview] = useState(false);
  const [share, setShare] = useState(false);

  return (
    <Subscribe to={[StateContainer]}>
      {(statecontainer) => (
        <SafeAreaView style={{overflow: 'hidden', backgroundColor: 'white'}}>
          <ScrollView>
            <View style={{borderColor: '#ffc408', borderWidth: 2}}>
              <ImageBackground
                style={{
                  height: 180,
                  width: '100%',
                  resizeMode: 'contain',
                }}
                source={require('../assets/sigdicover.png')}></ImageBackground>
            </View>
            <View style={{height: 48}}>
              <Image
                style={{
                  position: 'absolute',
                  bottom: 0,
                  borderColor: '#ffc408',
                  borderWidth: 2,
                  left: windowWidth / 2 - 48,
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
                alignContent: 'flex-start',
              }}>
              <View
                style={{
                  marginHorizontal: 10,
                  paddingBottom: 5,
                  borderBottomColor: '#eaeaea',
                  borderBottomWidth: 1,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    fontFamily: 'open-sans',
                  }}>
                  Shivams Kitchen
                </Text>
                <Text style={{fontSize: 12}}>North Indian, Punjabi</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 12}}>Madhapur</Text>
                  <Text style={{fontSize: 12}}> |</Text>
                  <Text style={{fontSize: 12}}>3.0 km</Text>
                </View>
                <Text style={{fontSize: 12, color: 'green'}}>Open Now</Text>
              </View>

              <View style={{marginHorizontal: 10}}>
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
                style={{fontWeight: 'bold', fontSize: 14, paddingBottom: 5}}>
                About
              </Text>
              <Text style={{textAlign: 'justify', fontSize: 12}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A eni
                scelerisque id id. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. A eni celerisque id id.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: 70,
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setMenu(true);
                  setReview(false);
                  setShare(false);
                }}>
                <Text>Menu</Text>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                onPress={() => {
                  setMenu(false);
                  setReview(true);
                  setShare(false);
                }}>
                <Text>Review</Text>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                onPress={() => {
                  setMenu(false);
                  setReview(false);
                  setShare(true);
                }}>
                <Text>Share</Text>
              </TouchableWithoutFeedback>
            </View>
            <View>
              {menu && <Menu />}
              {review && <Reviews />}
              {share && <Share />}
            </View>
          </ScrollView>

          {statecontainer.state.totalAmount > 0 && (
            <View style={styles.footerContainer}>
              <TouchableWithoutFeedback onPress={showPopup}>
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
                ref={(target) => (popupRef = target)}
                onTouchOutside={onClosePopup}></CartPopup>
            </View>
          )}
        </SafeAreaView>
      )}
    </Subscribe>
  );
}

export default Profile;

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
