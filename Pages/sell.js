import React, {Component} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Sellmainlanding from './sellmainlanding';
import Selltabnavigation from './selltabnavigation';
export default class xSell extends Component {
  render() {
    return (
      <>
        <ScrollView>
          {!this.props.seller ? (
            <Selltabnavigation navigation={this.props.navigation} />
          ) : (
            <Sellmainlanding navigation={this.props.navigation} />
          )}
        </ScrollView>
      </>
    );
  }
}
