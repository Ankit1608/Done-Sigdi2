import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

class OrderDetailsComponent extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={require("../assets/rajma.png")} style={styles.itemImg} />
        <View>
          <View style={styles.itemNameContainer}>
            <Image source={require("../assets/veg.png")} style={styles.mark} />
            <Text>Rajma Chawal</Text>
          </View>
          <Text style={styles.subCategory}>in Gravey</Text>
          <View style={styles.rupeeContainer}>
            <Image
              source={require("../assets/rupeesymbol.png")}
              style={styles.rupee}
            />
            <Text>20</Text>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantity}>2</Text>
        </View>
      </View>
    );
  }
}

export default OrderDetailsComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemImg: {
    height: 100,
    width: 100,
    borderRadius: 15,
    marginRight: 20,
  },
  itemNameContainer: {
    flexDirection: "row",
  },
  mark: {
    height: 16,
    width: 16,
    marginRight: 5,
  },
  subCategory: {
    color: "#838383",
  },
  rupee: {
    height: 10,
    width: 10,
    marginRight: 1,
    resizeMode: "contain",
  },
  rupeeContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  quantityContainer: {
    paddingHorizontal: 25,
    borderWidth: 0.5,
    borderColor: "#A8A6A6",
    borderRadius: 5,
  },
  quantity: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#C4C4C4",
    color: "#ffffff",
  },
});
