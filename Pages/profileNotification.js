import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

class ProfileNotification extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Image source={require("../assets/editpencil.png")} />
          <Text style={styles.headingText}>Notifications</Text>
        </View>
      </View>
    );
  }
}

export default ProfileNotification;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    margin: 20,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  headingText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "bold",
  },
});
