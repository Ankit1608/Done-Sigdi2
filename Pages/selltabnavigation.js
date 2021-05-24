import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Container, Tab, Tabs} from 'native-base';
import Sellerprofile from './sellerProfile';
import Paymentpage from './paymentPage';

export class selltabnavigation extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab
            heading="Profile"
            activeTabStyle={{backgroundColor: '#763f43'}}
            tabStyle={{backgroundColor: '#3C2022'}}>
            <Sellerprofile navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading="Payments"
            activeTabStyle={{backgroundColor: '#763f43'}}
            tabStyle={{backgroundColor: '#3C2022'}}>
            <Paymentpage />
          </Tab>
          <Tab
            heading="Notifications"
            activeTabStyle={{backgroundColor: '#763f43'}}
            tabStyle={{backgroundColor: '#3C2022'}}></Tab>
        </Tabs>
      </Container>
    );
  }
}

export default selltabnavigation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
