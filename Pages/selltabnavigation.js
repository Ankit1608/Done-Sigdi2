import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Sellerprofile from './sellerProfile';
import Paymentpage from './paymentPage';
import EditSellerProfile from './editSellerProfile';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function MyDrawer() {
  function Root1() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Seller Profile" component={Sellerprofile} />
        <Stack.Screen name="EditSellerProfile" component={EditSellerProfile} />
      </Stack.Navigator>
    );
  }
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Root"
        component={Root1}
        options={{drawerLabel: 'Seller Profile'}}
      />
      <Drawer.Screen
        name="Paymentpage"
        component={Paymentpage}
        options={{drawerLabel: 'Payment Details'}}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
