import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class RadioButton extends Component {
  state = {
    value: null,
  };

  render() {
    const { PROP } = this.props;
    const { value } = this.state;

    return (
      <View>
        {PROP.map((res) => {
          return (
            <TouchableOpacity
              onPress={() => {
                this.setState({ value: res.key });
              }}
            >
              <View key={res.key} style={styles.container}>
                <Text style={styles.radioText}>{res.text}</Text>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => {
                    this.setState({
                      value: res.key,
                    });
                  }}
                >
                  {value === res.key && <View style={styles.selectedRb} />}
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioText: {
    marginRight: 5,
    color: "#000",
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#838383",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "#FCCF08",
  },
  result: {
    marginTop: 20,
    color: "white",
    fontWeight: "600",
    backgroundColor: "#F3FBFE",
  },
});
