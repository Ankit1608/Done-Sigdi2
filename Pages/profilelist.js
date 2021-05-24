import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  TouchableNativeFeedback,
  Pressable,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default function Profilelist({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.name}>Ankit Kumar</Text>
        <View style={styles.details2}>
          <Text style={styles.phonenumber}>8686959744</Text>
          <Text style={styles.mail}>janedoe@gmail.com</Text>
        </View>
      </View>
      <Text style={styles.profiletext}>YOUR PROFILE</Text>
      <View style={styles.lists}>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate('Profileedit')}>
          <View style={styles.listitem}>
            <Image
              style={styles.profilelisticoncontainer}
              source={require('../assets/edit.png')}
            />
            <Text style={styles.listtext}>Edit Profile</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate('Profileaddress')}>
          <View style={styles.listitem}>
            <Image
              style={styles.profilelisticoncontainer}
              source={require('../assets/address.png')}
            />
            <Text style={styles.listtext}>Address Book</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.lists}>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate('Profilebookmarks')}>
          <View style={styles.listitem}>
            <Image
              style={styles.profilelisticoncontainer2}
              source={require('../assets/bookmark.png')}
            />
            <Text style={styles.listtext}>Book Marks</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.listitem}>
          <Image
            style={styles.profilelisticoncontainer}
            source={require('../assets/notificationicon.png')}
          />
          <Text style={styles.listtext}>Notifications</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate('Profileyourorders')}>
          <View style={styles.listitem}>
            <Image
              style={styles.profilelisticoncontainer}
              source={require('../assets/bag.png')}
            />
            <Text style={styles.listtext}>Your Orders</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.lists2}>
        <View style={styles.listitem}>
          <Image
            style={styles.profilelisticoncontainer2}
            source={require('../assets/about.png')}
          />
          <Text style={styles.listtext}>About</Text>
        </View>
        <View style={styles.listitem}>
          <Image
            style={styles.profilelisticoncontainer}
            source={require('../assets/feedback.png')}
          />
          <Text style={styles.listtext}>Send Feedback</Text>
        </View>
        <View style={styles.listitem}>
          <Image
            style={styles.profilelisticoncontainer}
            source={require('../assets/rating.png')}
          />
          <Text style={styles.listtext}>Rate us on Play Store</Text>
        </View>
        <Pressable
          onPress={() => {
            route.params.signOut();
          }}>
          <View style={styles.listitem}>
            <Text style={styles.logout}>Log Out</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
    overflow: 'hidden',
    alignContent: 'center',
    //alignItems:"center",
    paddingHorizontal: 10,
  },
  details: {
    paddingBottom: 25,
    marginTop: 10,
    borderBottomColor: '#838383',
    borderBottomWidth: 0.5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details2: {
    flexDirection: 'row',
    marginTop: 20,
  },
  phonenumber: {
    flex: 1,
    fontSize: 16,
  },
  mail: {
    flex: 2,
    fontSize: 16,
  },
  profiletext: {
    marginTop: 20,
    color: '#575757',
  },
  lists: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#838383',
  },
  lists2: {
    paddingTop: 15,
  },
  listitem: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 15,
  },
  listtext: {
    marginLeft: 10,
  },
  listtext2: {
    color: '#7C1C00',
    marginLeft: 10,
  },
  logout: {
    color: '#552e30',
    fontWeight: 'bold',
    marginLeft: 30,
  },
  profilelisticoncontainer: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  profilelisticoncontainer2: {
    height: 17,
    width: 17,
    resizeMode: 'contain',
  },
});
