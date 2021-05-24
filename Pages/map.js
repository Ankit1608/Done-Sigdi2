// import React, {Component} from 'react';
// import {View, StyleSheet, Dimensions} from 'react-native';
// import MapView from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';

// const {width, height} = Dimensions.get('window');
// const SCREEN_HEIGHT = height;
// const SCREEN_WIDTH = width;
// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// class MapComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       initialPosition: {
//         latitude: 0,
//         longitude: 0,
//         latitudeDelta: 0,
//         longitudeDelta: 0,
//       },
//     };
//   }

//   componentDidMount() {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         var lat = parseFloat(position.coords.latitude);
//         var long = parseFloat(position.coords.longitude);

//         var initialRegion = {
//           latitude: lat,
//           longitude: long,
//           latitudeDelta: LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA,
//         };

//         this.setState({initialPosition: initialRegion});
//       },
//       (error) => alert(JSON.stringify(error)),
//       {enableHighAccuracy: true, timeout: 20000},
//     );
//   }

//   renderScreen = () => {
//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           initialRegion={this.state.initialPosition}
//         />
//       </View>
//     );
//   };

//   render() {
//     return this.renderScreen();
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });

// export default MapComponent;

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {userLocation} from '../Graphql/gql';
navigator.geolocation = require('@react-native-community/geolocation');
export default function map() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000},
    );
  });

  return (
    <View style={styles.mapMainContainer}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{latitude: latitude, longitude: longitude}}></Marker>
      </MapView>
      <View style={styles.saveLocationContainer}>
        <Formik
          initialValues={{address: ''}}
          onSubmit={async (values) => {
            navigation.navigate('page6');
          }}>
          {({handleChange, handleSubmit, errors}) => (
            <>
              <TextInput
                style={styles.addressInputBox}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Current Address"
                placeholderTextColor="#CBC8C8"
                keyboardType="text"
                onChangeText={handleChange('address')}
              />

              <View style={styles.saveLocationButton} onPress={handleSubmit}>
                <Text style={styles.saveLocationText}>Save Location</Text>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mapMainContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  map: {
    height: '80%',
  },
  addressInputBox: {
    backgroundColor: 'gray',
    width: '100%',
    marginBottom: 15,
  },
  saveLocationContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '20%',
  },
  saveLocationButton: {
    height: 50,
    width: 180,
    backgroundColor: '#ffcf08',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  saveLocationText: {
    color: '#fff',
  },
});
