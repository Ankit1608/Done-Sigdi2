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
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default function Page2({navigation}) {
  return (
    <SafeAreaView style={styles.page2container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('page3')}>
        <View style={styles.page2container2}>
          <Image style={styles.img} source={require('../assets/chicken.png')} />
        </View>
        <View style={styles.page2container3}>
          <Image
            style={styles.page2vectorcontainer}
            source={require('../assets/cooking.png')}
          />
          <Text style={styles.text}>Let the magic of your food </Text>
          <Text style={styles.text2}>reach homes</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.page2dotcontainer}>
        <View style={styles.page2dot1}></View>
        <View style={styles.page2dot2}></View>
        <View style={styles.page2dot3}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page2container: {
    flex: 1,
    backgroundColor: '#3c2022',
    marginTop: Platform.OS === 'android' ? 0 : 0,
    overflow: 'hidden',
  },
  page2container2: {
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
    marginBottom: -20,
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
  page2container3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  page2vectorcontainer: {
    height: 240,
    width: 240,
    marginLeft: '-10%',
  },
  text: {
    fontSize: 20,
    marginTop: 0,
    color: '#FFFFFF',
  },
  text2: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  page2dotcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  page2dot1: {
    width: 10,
    height: 10,
    backgroundColor: '#ffffff',
    margin: '3%',
    borderRadius: 50,
  },
  page2dot2: {
    width: 10,
    height: 10,
    backgroundColor: '#FCCF08',
    margin: '3%',
    borderRadius: 50,
  },
  page2dot3: {
    width: 10,
    height: 10,
    backgroundColor: '#FFFFFF',
    margin: '3%',
    borderRadius: 50,
  },
});
