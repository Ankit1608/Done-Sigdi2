import React from 'react';
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

export default function Page1({navigation}) {
  return (
    <SafeAreaView style={styles.page1container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('page2')}>
        <View style={styles.page1container2}>
          <Image style={styles.img} source={require('../assets/Dosa.png')} />
        </View>
        <View style={styles.page1container3}>
          <Image
            style={styles.page1logocontainer}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.text}>Buy and Sell food online</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.page1dotcontainer}>
        <View style={styles.page1dot1}></View>
        <View style={styles.page1dot2}></View>
        <View style={styles.page1dot3}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page1container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FCCF08',
    marginTop: Platform.OS === 'android' ? 0 : 0,
    overflow: 'hidden',
  },
  page1container2: {
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
    marginBottom: 20,
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
  page1container3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  page1logocontainer: {
    height: 200,
    width: 200,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    color: '#FFFFFF',
  },
  page1dotcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  page1dot1: {
    width: 10,
    height: 10,
    backgroundColor: '#552E30',
    margin: '3%',
    borderRadius: 50,
  },
  page1dot2: {
    width: 10,
    height: 10,
    backgroundColor: '#FFFFFF',
    margin: '3%',
    borderRadius: 50,
  },
  page1dot3: {
    width: 10,
    height: 10,
    backgroundColor: '#FFFFFF',
    margin: '3%',
    borderRadius: 50,
  },
});
