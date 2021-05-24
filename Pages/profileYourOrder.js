import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import YourOrderComponent from "../component/yourOrderComponent";

class ProfileYourOrder extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <YourOrderComponent />
      </View>
    );
  }
}

export default ProfileYourOrder;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    marginTop: 30,
  },
});
