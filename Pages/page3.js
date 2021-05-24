import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

export default function Page3({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Image style={styles.img} source={require('../assets/rice.png')} />
      </View>
      <View style={styles.page3container3}>
        <Image
          style={styles.page3vectorcontainer}
          source={require('../assets/Delivery.png')}
        />
        <Text style={styles.text}>Looking for home food? </Text>
        <Text style={styles.text2}>order now</Text>
      </View>
      <View style={styles.page3container4}>
        <TouchableNativeFeedback
          onPress={() => route.params.setSlideLoad(false)}>
          <View style={styles.page3signupcontainer}>
            <Text style={styles.signuptext}>Sign up</Text>
          </View>
        </TouchableNativeFeedback>
        <Text style={styles.skiptext}>I'll skip</Text>
      </View>
      <View style={styles.page3dotcontainer}>
        <View style={styles.page3dot1}></View>
        <View style={styles.page3dot2}></View>
        <View style={styles.page3dot3}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCCF08',
    marginTop: Platform.OS === 'android' ? 0 : 0,
    overflow: 'hidden',
  },
  container2: {
    position: 'relative',
    padding: 25,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    width: 300,
    height: 300,
    left: '45%',
    top: '-10%',
    borderRadius: 700 / 2,
    overflow: 'hidden',
  },
  img: {
    position: 'relative',
    height: '100%',
    width: '100%',
    flex: 1,
    borderRadius: 1000 / 2,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  page3container3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  page3vectorcontainer: {
    height: 200,
    width: 200,
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    marginLeft: 10,
  },
  text2: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  page3container4: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page3dotcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  page3dot1: {
    width: 10,
    height: 10,
    backgroundColor: '#FFFFFF',
    margin: '3%',
    borderRadius: 50,
  },
  page3dot2: {
    width: 10,
    height: 10,
    backgroundColor: '#FFFFFF',
    margin: '3%',
    borderRadius: 50,
  },
  page3dot3: {
    width: 10,
    height: 10,
    backgroundColor: '#552E30',
    margin: '3%',
    borderRadius: 50,
  },
  page3signupcontainer: {
    backgroundColor: '#ffffff',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    height: 66,
    width: 201,
  },
  signuptext: {
    fontSize: 20,
  },
  skiptext: {
    marginTop: 10,
  },
});

/*
 */
