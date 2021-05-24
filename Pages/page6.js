import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {useMutation} from '@apollo/react-hooks';
import {userDetails} from '../Graphql/gql';
const windowHeight = Dimensions.get('window').height;

export default function Page6({navigation}) {
  const [UserDetails] = useMutation(userDetails);
  return (
    <SafeAreaView style={styles.page6container}>
      <ImageBackground
        style={styles.profileimgcontainer}
        source={require('../assets/bgdetail.png')}>
        <ScrollView>
          <View style={styles.page6heading}>
            <Text style={styles.page6headingotp}>Personal Details</Text>
            <Text style={styles.page6headingotp2}>
              We would like to know more about you
            </Text>
          </View>
          <Formik
            initialValues={{name: '', email: ''}}
            onSubmit={async (values) => {
              navigation.navigate('page7');
            }}>
            {({handleChange, handleSubmit, errors}) => (
              <>
                <View style={styles.page6inputwrapper}>
                  <TextInput
                    placeholder="Name"
                    placeholderTextColor="gray"
                    style={styles.page6Namewrapper}
                    onChangeText={handleChange('name')}></TextInput>
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="gray"
                    style={styles.page6Emailwrapper}
                    onChangeText={handleChange('email')}></TextInput>
                </View>
                <View style={styles.page6buttoncontainer}>
                  <TouchableNativeFeedback onPress={handleSubmit}>
                    <View style={styles.page6Continuecontainer}>
                      <Text style={styles.page6Continuebutton}>Continue</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page6container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FCCF08',
    marginTop: Platform.OS === 'android' ? 0 : 0,
    overflow: 'hidden',
  },

  profileimgcontainer: {
    width: '100%',
    height: windowHeight,
    resizeMode: 'cover',
  },
  page6heading: {
    alignItems: 'center',
    marginTop: 50,
  },
  page6headingotp: {
    fontSize: 28,
    color: '#fff',
  },
  page6headingotp2: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
    width: 250,
    marginTop: 5,
  },
  page6inputwrapper: {
    marginTop: 40,
    alignItems: 'center',
  },
  page6Namewrapper: {
    fontSize: 18,
    width: '70%',
    height: 40,
    borderBottomWidth: 0.5,
    color: '#fff',
    borderBottomColor: '#FFFFFF',
  },
  page6Emailwrapper: {
    fontSize: 18,
    width: '70%',
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFFFFf',
    color: '#fff',
    marginTop: 70,
  },
  page6buttoncontainer: {
    marginTop: 130,
    alignItems: 'center',
  },
  page6Continuecontainer: {
    width: 233,
    height: 66,
    backgroundColor: '#FFCF08',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  page6Continuebutton: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
