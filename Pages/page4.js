import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import AuthFlow from '../container/authflow';
import {Subscribe} from 'unstated';
import {Auth} from 'aws-amplify';
export default function Page4({navigation, route}) {
  const phoneRegExp = /^[6-9]\d{9}$/;
  const validationSchema = Yup.object().shape({
    phonenumber: Yup.string()
      .required()
      .matches(phoneRegExp, 'Phone number is not valid')
      .label('Phone Number'),
  });

  return (
    <SafeAreaView style={styles.page4container}>
      <ScrollView>
        <View style={styles.page4container2}>
          <Image
            style={styles.page4imgcontainer}
            source={require('../assets/illustration.png')}
          />
          <Formik
            initialValues={{phonenumber: ''}}
            onSubmit={async (values) => {
              let number = '+91' + values.phonenumber;
              route.params.setNumber(number);
              route.params.signIn(number);
              // setNo(number);
              // signIn();
            }}
            validationSchema={validationSchema}>
            {({handleChange, handleSubmit, errors}) => (
              <>
                <TextInput
                  style={styles.page4phonenumberinput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Phone Number"
                  placeholderTextColor="#CBC8C8"
                  keyboardType="numeric"
                  maxLength={10}
                  textContentType="telephoneNumber"
                  onChangeText={handleChange('phonenumber')}
                />
                <Text style={{color: 'red'}}>{errors.phonenumber}</Text>
                <TouchableNativeFeedback onPress={handleSubmit}>
                  <View style={styles.page4otpbutton}>
                    <Text style={{color: 'white', fontSize: 18}}>SEND OTP</Text>
                  </View>
                </TouchableNativeFeedback>
              </>
            )}
          </Formik>
        </View>
        <View style={styles.page4termscontainer}>
          <View style={styles.page4termscontainer2}>
            <Text style={styles.page4text}>
              By continuing, you agree to our
            </Text>
            <Text style={styles.page4text}>
              Terms of serivce PrivacyPolicy Content Policy
            </Text>
            <View style={styles.page4botttomborder} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page4container: {
    flex: 1,
    backgroundColor: '#3C2022',
    marginTop: Platform.OS === 'android' ? 0 : 0,
    overflow: 'hidden',
  },
  page4container2: {
    alignItems: 'center',
  },
  page4imgcontainer: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    marginTop: -25,
  },
  page4phonenumberinput: {
    textAlign: 'center',
    fontSize: 18,
    height: 66,
    width: 233,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 20,
  },
  page4otpbutton: {
    backgroundColor: '#FCCF08',
    height: 66,
    width: 201,
    borderRadius: 30,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page4termscontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 160,
    paddingBottom: 20,
  },
  page4termscontainer2: {
    alignItems: 'center',
  },
  page4text: {
    fontSize: 10,
    color: 'white',
  },
  page4botttomborder: {
    marginTop: 5,
    width: 218,
    borderBottomColor: '#838383',
    borderBottomWidth: 1,
  },
});
