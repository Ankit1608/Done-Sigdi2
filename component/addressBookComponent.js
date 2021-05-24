import React, { Component } from "react";

import { View, Text, Image, StyleSheet } from "react-native";

class AddressBookComponent extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={require("../assets/location.png")}
          style={styles.image}
        />
        <View>
          <Text style={styles.heading}>{this.props.addresstype}</Text>
          <Text>{this.props.address}</Text>
        </View>
      </View>
    );
  }
}

export default AddressBookComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: 53,
    width: 35,
    marginRight: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
