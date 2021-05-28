import React, {useState} from 'react';
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
  Pressable,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import SellerOrderCard from '../component/sellerOrderCard';
import SellerPreOrderCard from '../component/sellerPreOrderCard';

const listing = [
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
];

function Sellerprofile() {
  const windowWidth = Dimensions.get('window').width;
  const [open, setOpen] = useState(true);
  const [additem, setAdditem] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{overflow: 'hidden', backgroundColor: '#fff'}}>
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
        <View style={{borderBottomWidth: 4, borderBottomColor: '#eaeaea'}}>
          <View
            style={{
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
          <Pressable onPress={() => navigation.navigate('EditSellerProfile')}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E0E0E0',
                alignItems: 'center',
                borderRadius: 5,
                padding: 5,
                margin: 5,
                marginBottom: 20,
              }}>
              <Text>Edit Profile</Text>
            </View>
          </Pressable>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            marginTop: 10,
            borderBottomWidth: 4,
            borderBottomColor: '#eaeaea',
            paddingBottom: 20,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 14, paddingBottom: 5}}>
            About
          </Text>
          <Text style={{textAlign: 'justify', fontSize: 12}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A eni
            scelerisque id id. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. A eni celerisque id id.
          </Text>
        </View>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <View
            style={{
              backgroundColor: open ? '#068542' : '#710f11',
              borderWidth: 0.2,
              borderColor: '#FCFCFC',
              padding: 5,
              margin: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Text style={{color: '#ffffff', fontSize: 16}}>
              {open ? 'Open Now' : 'Closed'}
            </Text>
          </View>
        </TouchableOpacity>
        <SellerOrderCard
          image={listing[0].image}
          mark={listing[0].mark}
          name={listing[0].name}
          price={listing[0].price}
          stock={listing[0].stock}
        />
        <SellerPreOrderCard
          image={listing[0].image}
          mark={listing[0].mark}
          name={listing[0].name}
          price={listing[0].price}
        />
      </ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          setAdditem(!additem);
        }}>
        <View style={{position: 'absolute', bottom: 2, right: 2, margin: 5}}>
          <View
            style={{
              backgroundColor: 'brown',
              height: 50,
              width: 50,
              borderRadius: 25,
            }}></View>
        </View>
      </TouchableWithoutFeedback>
      {additem && (
        <View
          style={{
            position: 'absolute',
            bottom: 55,
            right: 2,
            margin: 5,
            backgroundColor: '#fff',
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Add Item');
            }}>
            <Text> Add Current</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text> Add Menu</Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </SafeAreaView>
  );
}

export default Sellerprofile;
