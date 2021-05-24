import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import AuthFlow from '../container/authflow';
import {Subscribe} from 'unstated';
import {Auth} from 'aws-amplify';

const windowHeight = Dimensions.get('window').height;

export default function Page({navigation, route}) {
  const [onetimepass, setOneTimePass] = useState('');
  const [ses, setses] = useState('');
  const [user, setUser] = useState('');
  const verifyOtp = () => {
    Auth.sendCustomChallengeAnswer(ses, onetimepass)
      .then((user) => {
        console.log('wassup');
        setUser(user);
        setses(null);
      })
      .catch((err) => {
        setOneTimePass('');
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={styles.page5container}>
      <ImageBackground
        style={styles.profileimgcontainer}
        source={require('../assets/bgotp.png')}>
        <ScrollView>
          <View style={styles.page5heading}>
            <Text style={styles.page5headingotp}>VERIFY OTP</Text>
            <Text style={styles.page5headingotp2}>
              Please type the verification code sent to yout registered number
            </Text>
          </View>
          <Formik
            initialValues={{pin1: '', pin2: '', pin3: '', pin4: ''}}
            onSubmit={async (values) => {
              let pin = String(
                values.pin1 + values.pin2 + values.pin3 + values.pin4,
              );
              route.params.setOtp(pin);
              route.params.verifyOtp(pin);
            }}>
            {({handleChange, handleSubmit, errors}) => (
              <>
                <View style={styles.page5otpcontainer}>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.textInput}
                    maxLength={1}
                    onChangeText={handleChange('pin1')}></TextInput>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.textInput}
                    maxLength={1}
                    onChangeText={handleChange('pin2')}></TextInput>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.textInput}
                    maxLength={1}
                    onChangeText={handleChange('pin3')}></TextInput>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.textInput}
                    maxLength={1}
                    onChangeText={handleChange('pin4')}></TextInput>
                </View>

                <View style={styles.page5buttoncontainer}>
                  <TouchableNativeFeedback onPress={handleSubmit}>
                    <View style={styles.page5Verifynowcontainer}>
                      <Text style={styles.page5Verifynowbutton}>
                        Verify Now
                      </Text>
                    </View>
                  </TouchableNativeFeedback>

                  <Text style={styles.page5Resendcodebutton}>Resend code</Text>
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
  page5container: {
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
  page5heading: {
    alignItems: 'center',
    marginTop: 60,
  },
  page5headingotp: {
    fontSize: 28,
    color: '#fff',
  },
  page5headingotp2: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
    width: 250,
    marginTop: 20,
  },
  page5otpcontainer: {
    height: 200,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  page5buttoncontainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  page5Verifynowcontainer: {
    width: 233,
    height: 66,
    backgroundColor: '#3C2022',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  page5Verifynowbutton: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  page5Resendcodebutton: {
    color: '#000000',
    marginTop: 10,
    fontSize: 14,
    opacity: 0.66,
  },
  textInput: {
    backgroundColor: '#FCCF08',
    fontWeight: '600',
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    height: 55,
    width: '14.5%',
    margin: 12,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: '#3C2022',
    alignItems: 'center',
    textAlign: 'center',
  },
});
