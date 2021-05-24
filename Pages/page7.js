import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.page7container}>
        <View style={styles.page7container2}>
          <Image
            style={styles.page7imgcontainer}
            source={require('../assets/bino.png')}
          />
          <Text style={styles.page7text1}>Hi, nice to meet you !</Text>
          <Text style={styles.page7text2}>
            Set your location to get started
          </Text>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('map')}>
            <View style={styles.page7currrentbutton}>
              <Text style={styles.page7cureentcontainer}>Current Location</Text>
            </View>
          </TouchableNativeFeedback>
          <View style={styles.page7setbutton}>
            <Text style={styles.page7setcontainer}>Set Location</Text>
          </View>
        </View>
        <View style={styles.page7footer}>
          <Text style={styles.page7footer1}>
            We only access your location while your using the
          </Text>
          <Text style={styles.page7footer1}>
            app to improve your experience
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  page7container: {
    flex: 1,
    backgroundColor: '#FCCF08',
    marginTop: Platform.OS === 'android' ? 0 : 0,
    overflow: 'hidden',
  },
  page7container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page7imgcontainer: {
    width: 180,
    height: 90,
    resizeMode: 'contain',
  },
  page7text1: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 5,
    marginTop: 10,
  },
  page7text2: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 40,
  },
  page7currrentbutton: {
    backgroundColor: '#3C2022',
    height: 66,
    width: 233,
    borderRadius: 30,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page7cureentcontainer: {
    color: 'white',
    fontSize: 18,
  },
  page7setbutton: {
    backgroundColor: '#3C2022',
    height: 66,
    width: 233,
    borderRadius: 30,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page7setcontainer: {
    color: 'white',
    fontSize: 18,
  },
  page7footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  page7footer1: {
    fontSize: 14,
    color: '#fff',
  },
});
