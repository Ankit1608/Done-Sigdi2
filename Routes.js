import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Subscribe} from 'unstated';
import {Auth} from 'aws-amplify';

import Page1 from './Pages/page1';
import Page2 from './Pages/page2';
import Page3 from './Pages/page3';
import Page4 from './Pages/page4';
import Page5 from './Pages/page5';
import Page6 from './Pages/page6';
import Page7 from './Pages/page7';
import Map from './Pages/map';
import Searchpage from './Pages/searchpage';
import Searchresult from './Pages/searchresult';
import Home from './Pages/home';
import Profilelist from './Pages/profilelist';
import ProfileEdit from './Pages/profileEditProfile';
import ProfileAddress from './Pages/profileAddressBook';
import ProfileBookmarks from './Pages/profileBookmarks';
import ProfileYourOrders from './Pages/profileYourOrder';
import Sell from './Pages/sell';
import Selltabnavigation from './Pages/selltabnavigation';
import Sellmainlanding from './Pages/sellmainlanding';
import EditSellerProfile from './Pages/editSellerProfile';
import Profile from './Pages/profile';
import SellIcon from './assets/JSX_SVG/sell_icon';
import SearchIcon from './assets/JSX_SVG/searchIcon';
import ProfileIcon from './assets/JSX_SVG/profileicon';
import OrderIcon from './assets/JSX_SVG/orderIcon';
import SellDrawer from './Pages/selltabnavigation';
import Sellerprofile from './Pages/sellerProfile';
import Paymentpage from './Pages/paymentPage';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
  Dimensions,
  Pressable,
  ImageBackground,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import RateOrder from './Pages/rateOrderPage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AddItem from './Pages/addItemScreen';

const windowHeight = Dimensions.get('window').height;
const NOTSIGNIN = 'You are NOT logged in';
const SIGNEDIN = 'You have logged in successfully';
const SIGNEDOUT = 'You have logged out successfully';
const WAITINGFOROTP = 'Enter OTP number';
const VERIFYNUMBER = 'Verifying number (Country code +XX needed)';

export default function Routes() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const [message, setMessage] = useState('Welcome to Demo');
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [otp, setOtp] = useState('');
  const [number, setNumber] = useState('');
  const [slideload, setSlideLoad] = useState(true);
  const password = Math.random().toString(10) + 'Abc#';

  const phoneRegExp = /^[6-9]\d{9}$/;
  const validationSchema = Yup.object().shape({
    phonenumber: Yup.string()
      .required()
      .matches(phoneRegExp, 'Phone number is not valid')
      .label('Phone Number'),
  });
  useEffect(() => {
    verifyAuth();
  }, []);

  const verifyAuth = () => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
        setMessage(SIGNEDIN);
        setSession(null);
      })
      .catch((err) => {
        console.error(err);
        setMessage(NOTSIGNIN);
      });
  };
  const signOut = () => {
    if (user) {
      Auth.signOut();
      setUser(null);
      setOtp('');
      setMessage(SIGNEDOUT);
    } else {
      setMessage(NOTSIGNIN);
    }
  };
  const signIn = (num) => {
    setMessage(VERIFYNUMBER);
    console.log('bl' + num);
    setNumber(num);
    Auth.signIn(num)
      .then((result) => {
        setSession(result);
        setMessage(WAITINGFOROTP);
      })
      .catch((e) => {
        if (e.code === 'UserNotFoundException') {
          signUp();
        } else if (e.code === 'UsernameExistsException') {
          setMessage(WAITINGFOROTP);
          signIn();
        } else {
          console.log(e.code);
          console.error(e);
        }
      });
  };
  const signUp = async () => {
    const result = await Auth.signUp({
      username: number,
      password,
      attributes: {
        phone_number: number,
      },
    })
      .then(() => signIn())
      .catch((e) => console.log(e));
    return result;
  };
  const verifyOtp = (op) => {
    console.log('inside' + op);
    Auth.sendCustomChallengeAnswer(session, op)
      .then((user) => {
        setUser(user);
        setMessage(SIGNEDIN);
        setSession(null);
      })
      .catch((err) => {
        setMessage(err.message);
        setOtp('');
        console.log(err);
      });
  };
  const Slideshow1 = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="page1" component={Page1} />
      <Stack.Screen name="page2" component={Page2} />
      <Stack.Screen
        name="page3"
        component={Page3}
        initialParams={{
          setSlideLoad: setSlideLoad,
        }}
      />
    </Stack.Navigator>
  );
  const Slideshow2 = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="page5"
        component={Page5}
        initialParams={{setOtp: setOtp, verifyOtp: verifyOtp}}
      />
    </Stack.Navigator>
  );

  const Slideshow3 = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="page7" component={Page7} />
      <Stack.Screen name="map" component={Map} />
    </Stack.Navigator>
  );

  const orderStackNavigation = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Order" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
  const searchStackNavigation = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Search" component={Searchpage} />
      <Stack.Screen name="Searchresult" component={Searchresult} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
  const sellStackNavigation = () => (
    <Stack.Navigator initialRouteName="Seller Profile">
      <Stack.Screen
        name="Seller Profile"
        component={Sellerprofile}
        options={{headerShown: false}}
      />
      <Stack.Screen name="EditSellerProfile" component={EditSellerProfile} />
      <Stack.Screen name="Add Item" component={AddItem} />
    </Stack.Navigator>
  );
  const profilelistStackNavigation = () => (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Profilelist"
        component={Profilelist}
        initialParams={{
          signOut: signOut,
        }}
      />
      <Stack.Screen name="Edit Profile" component={ProfileEdit} />
      <Stack.Screen name="Address Book" component={ProfileAddress} />
      <Stack.Screen name="Bookmarks" component={ProfileBookmarks} />
      <Stack.Screen name="Your Orders" component={ProfileYourOrders} />
      <Stack.Screen name="Rate Order" component={RateOrder} />
    </Stack.Navigator>
  );

  const Appdrawer = () => (
    <Drawer.Navigator initialRouteName="Seller Profile">
      <Drawer.Screen
        name="Seller Profile"
        component={sellStackNavigation}
        options={{drawerLabel: 'Seller Profile'}}
      />
      <Drawer.Screen
        name="Paymentpage"
        component={Paymentpage}
        options={{drawerLabel: 'Payment Details'}}
      />
    </Drawer.Navigator>
  );
  return (
    <NavigationContainer>
      {!user && !session && slideload && <Slideshow1 />}
      {!user && !session && !slideload && (
        <SafeAreaView style={styles.page4container}>
          <ScrollView>
            <View style={styles.page4container2}>
              <Image
                style={styles.page4imgcontainer}
                source={require('./assets/illustration.png')}
              />
              <Formik
                initialValues={{phonenumber: ''}}
                onSubmit={(values) => {
                  console.warn('nkln');
                  let number = '+91' + values.phonenumber;
                  signIn(number);
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
                    <Pressable onPress={handleSubmit}>
                      <View style={styles.page4otpbutton}>
                        <Text style={{color: 'white', fontSize: 18}}>
                          SEND OTP
                        </Text>
                      </View>
                    </Pressable>
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
      )}
      {!user && session && (
        <SafeAreaView style={styles.page5container}>
          <ImageBackground
            style={styles.profileimgcontainer}
            source={require('./assets/bgotp.png')}>
            <ScrollView>
              <View style={styles.page5heading}>
                <Text style={styles.page5headingotp}>VERIFY OTP</Text>
                <Text style={styles.page5headingotp2}>
                  Please type the verification code sent to yout registered
                  number
                </Text>
              </View>
              <Formik
                initialValues={{pin1: '', pin2: '', pin3: '', pin4: ''}}
                onSubmit={async (values) => {
                  let pin = String(
                    values.pin1 + values.pin2 + values.pin3 + values.pin4,
                  );
                  setOtp(pin);
                  verifyOtp(pin);
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
                      <Pressable onPress={handleSubmit}>
                        <View style={styles.page5Verifynowcontainer}>
                          <Text style={styles.page5Verifynowbutton}>
                            Verify Now
                          </Text>
                        </View>
                      </Pressable>
                      <Pressable
                        onPress={() => {
                          console.warn(number);
                          signIn(number);
                        }}>
                        <Text style={styles.page5Resendcodebutton}>
                          Resend code
                        </Text>
                      </Pressable>
                    </View>
                  </>
                )}
              </Formik>
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
      )}
      {user && !session && (
        <Tab.Navigator>
          <Tab.Screen
            name="Order"
            component={orderStackNavigation}
            options={{
              title: 'Order',
              tabBarIcon: ({size, focused, color}) => {
                return <OrderIcon height={27} width={25} color={'black'} />;
              },
            }}
          />
          <Tab.Screen
            name="Search"
            component={searchStackNavigation}
            options={{
              title: 'Search',
              tabBarIcon: ({size, focused, color}) => {
                return <SearchIcon height={20} width={25} color={'black'} />;
              },
            }}
          />
          <Tab.Screen
            name="Sell"
            component={Appdrawer}
            options={{
              title: 'Sell',
              tabBarIcon: ({size, focused, color}) => {
                return <SellIcon height={27} width={25} color={'black'} />;
              },
            }}
          />
          <Tab.Screen
            name="Profilelist"
            component={profilelistStackNavigation}
            options={{
              title: 'Profilelist',
              tabBarIcon: ({size, focused, color}) => {
                return <ProfileIcon height={27} width={25} color={'black'} />;
              },
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    fontSize: 18,
    height: 66,
    width: 233,
    backgroundColor: 'gray',
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
