import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { Subscribe } from "unstated";
import StateContainer from "../container/container";

export default class Ordercard extends Component {
  render() {
    return (
      <Subscribe to={[StateContainer]}>
        {(statecontainer) => (
          <View style={styles.container}>
            <View style={styles.card}>
              <Image source={this.props.image} style={styles.img} />
              <View style={styles.detailscontainer}>
                <View style={styles.namecontainer}>
                  <Image source={this.props.mark} style={styles.mark} />
                  <Text style={styles.itemname}>{this.props.name}</Text>
                </View>
                <Text style={styles.foodtype}>in Gravey</Text>
                <View style={styles.pricecontainer}>
                  <Image
                    source={require("../assets/rupeesymbol.png")}
                    style={styles.symbol}
                  />
                  <Text style={styles.pricetext}>{this.props.price}</Text>
                </View>
                {this.props.stock < 3 && (
                  <Text style={styles.stock}>
                    Only {this.props.stock} Left in Stock
                  </Text>
                )}
              </View>
              <View style={styles.addbuttoncontainer}>
                {this.props.quantity === 0 && (
                  <TouchableOpacity
                    onPress={() => statecontainer.increment(this.props.item)}
                  >
                    <View style={styles.addbutton}>
                      <Text>ADD </Text>
                      <Text style={styles.plus}>+</Text>
                    </View>
                  </TouchableOpacity>
                )}
                {this.props.quantity > 0 && (
                  <View style={styles.addbutton}>
                    <TouchableOpacity
                      onPress={() => statecontainer.decrement(this.props.item)}
                      underlayColor="white"
                    >
                      <Text style={styles.minus}>-</Text>
                    </TouchableOpacity>
                    <Text>{this.props.quantity}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.item.quantity < this.props.item.stock &&
                        statecontainer.increment(this.props.item)
                      }
                      underlayColor="white"
                    >
                      <Text style={styles.plus}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </View>
        )}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
    overflow: "hidden",
    alignContent: "center",
    //alignItems:"center",
    marginTop: 30,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  img: {
    height: 100,
    width: 100,
    borderRadius: 15,
    marginRight: 20,
  },

  detailscontainer: {
    marginRight: 15,
    justifyContent: "center",
  },

  namecontainer: {
    flexDirection: "row",
  },

  mark: {
    height: 16,
    width: 16,
    marginRight: 5,
  },

  itemname: {
    fontWeight: "normal",
  },

  foodtype: {
    color: "#838383",
    fontSize: 12,
  },

  pricecontainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 5,
  },

  symbol: {
    height: 10,
    width: 10,
    marginRight: 1,
    resizeMode: "contain",
  },

  pricetext: {
    color: "#068542",
    fontWeight: "normal",
    fontSize: 16,
  },

  stock: {
    color: "#710F11",
    fontSize: 12,
  },

  addbuttoncontainer: {
    justifyContent: "center",
    alignItems: "flex-end",
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
