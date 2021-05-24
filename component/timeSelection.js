import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class timeSelection extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", marginTop: 20, margin: 8 }}>
        <Text style={styles.timeContainer}>{this.props.timeDisplay}</Text>
      </View>
    );
  }
}

export default timeSelection;

const styles = StyleSheet.create({
  timeContainer: {
    borderWidth: 0.5,
    borderRadius: 20,
    padding: 15,
    paddingTop: 3,
    paddingBottom: 3,
  },
});
