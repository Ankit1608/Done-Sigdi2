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
import AuthFlow from './container/authflow';
import SellDrawer from './Pages/selltabnavigation';
import {
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
  StyleSheet,
} from 'react-native';

const NOTSIGNIN = 'You are NOT logged in';
const SIGNEDIN = 'You have logged in successfully';
const SIGNEDOUT = 'You have logged out successfully';
const WAITINGFOROTP = 'Enter OTP number';
const VERIFYNUMBER = 'Verifying number (Country code +XX needed)';

export default function Routes() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const [message, setMessage] = useState('Welcome to Demo');
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [otp, setOtp] = useState('');
  const [number, setNumber] = useState('');
  const password = Math.random().toString(10) + 'Abc#';
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
  const signIn = (number1) => {
    setMessage(VERIFYNUMBER);
    console.log(number1);
    Auth.signIn('+918686959744')
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
  const verifyOtp = (pin) => {
    console.log('inside' + pin);
    Auth.sendCustomChallengeAnswer(session, pin)
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
      <Stack.Screen name="page3" component={Page3} />
      <Stack.Screen
        name="page4"
        component={Page4}
        initialParams={{
          setNumber: setNumber,
          signIn: signIn,
          setSession: setSession,
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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Sell" component={Sell} />
      <Stack.Screen name="Sellmainlanding" component={Sellmainlanding} />
      <Stack.Screen name="Selltabnavigation" component={Selltabnavigation} />
      <Stack.Screen name="EditSellerProfile" component={EditSellerProfile} />
    </Stack.Navigator>
  );
  const profilelistStackNavigation = () => (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Profilelist"
        component={Profilelist}
        initialParams={{signOut: signOut}}
      />
      <Stack.Screen name="Edit Profile" component={ProfileEdit} />
      <Stack.Screen name="Address Book" component={ProfileAddress} />
      <Stack.Screen name="Bookmarks" component={ProfileBookmarks} />
      <Stack.Screen name="Your Orders" component={ProfileYourOrders} />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      {!user && !session && <Slideshow1 />}
      {!user && session && <Slideshow2 />}
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
            component={SellDrawer}
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
});
