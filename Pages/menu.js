import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  TouchableHighlight,
  FlatList,
  ScrollView,
} from "react-native";

import { Subscribe } from "unstated";

import Ordercard from "../component/orderCard";
import StateContainer from "../container/container";

export default class Menu extends Component {
  render() {
    return (
      <Subscribe to={[StateContainer]}>
        {(statecontainer) => (
          <SafeAreaView style={styles.container}>
            <ScrollView>
              <View style={styles.textContainer}>
                <Text style={styles.topText}>Currently Available</Text>
              </View>
              <FlatList
                data={statecontainer.state.listing}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                  <Ordercard
                    image={item.image}
                    mark={item.mark}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    stock={item.stock}
                    item={item}
                  ></Ordercard>
                )}
              ></FlatList>
            </ScrollView>
          </SafeAreaView>
        )}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    overflow: "hidden",
    alignContent: "center",
    //alignItems:"center",
    marginHorizontal: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 100,
  },

  textContainer: {
    flexDirection: "row",
  },

  topText: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#c4c4c4",
  },
});
