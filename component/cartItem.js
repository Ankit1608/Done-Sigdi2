import React, { Component } from "react";

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Subscribe } from "unstated";
import StateContainer from "../container/container";

class cartItem extends Component {
  render() {
    return (
      <Subscribe to={[StateContainer]}>
        {(statecontainer) => (
          <View style={styles.itemContainer}>
            <View>
              <View style={styles.nameContainer}>
                <Image source={this.props.item.mark} style={styles.markimg} />
                <Text>{this.props.item.name}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Image
                  source={require("../assets/rupeesymbol.png")}
                  style={styles.rupeesymbol}
                />
                <Text>{this.props.item.price}</Text>
              </View>
            </View>
            <View style={styles.addbuttoncontainer}>
              {this.props.item.quantity === 0 && (
                <TouchableOpacity
                  onPress={() => statecontainer.increment(this.props.item)}
                >
                  <View style={styles.addbutton}>
                    <Text>ADD </Text>
                    <Text style={styles.plus}>+</Text>
                  </View>
                </TouchableOpacity>
              )}
              {this.props.item.quantity > 0 && (
                <View style={styles.addbutton}>
                  <TouchableOpacity
                    onPress={() => statecontainer.decrement(this.props.item)}
                  >
                    <Text style={styles.minus}>-</Text>
                  </TouchableOpacity>
                  <Text>{this.props.item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.item.quantity < this.props.item.stock &&
                      statecontainer.increment(this.props.item)
                    }
                  >
                    <Text style={styles.plus}>+</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        )}
      </Subscribe>
    );
  }
}

export default cartItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  nameContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  markimg: {
    height: 16,
    width: 16,
    marginRight: 6,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
  },
  rupeesymbol: {
    height: 10,
    width: 7,
    marginRight: 3,
  },
  addbuttoncontainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
  },

  addbutton: {
    flexDirection: "row",
    width: 90,
    height: 30,
    borderWidth: 0.5,
    borderColor: "#C4C4C4",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  plus: {
    color: "#FCCF08",
    paddingLeft: 15,
    fontSize: 16,
  },

  minus: {
    color: "#FCCF08",
    paddingRight: 15,
    fontSize: 30,
    padding: 10,
    paddingLeft: 0,
  },
});
