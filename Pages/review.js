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

import Ordercard from "../component/orderCard";
import Review from "../component/reviewcomponent";

export default class Menu extends Component {
  state = {
    listing2: [
      {
        id: 1,
        name: "Ankit Kumar",
        stars: 5,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d",
      },

      {
        id: 2,
        name: "Nithinsai",
        stars: 3,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d",
      },

      {
        id: 3,
        name: "Rounak Sharma",
        stars: 1,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d",
      },

      {
        id: 4,
        name: "Tarun Acharya",
        stars: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d",
      },
    ],
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <FlatList
            data={this.state.listing2}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Review
                name={item.name}
                stars={item.stars}
                review={item.review}
              />
            )}
          ></FlatList>
        </ScrollView>
      </SafeAreaView>
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
  },

  textContainer: {
    flexDirection: "row",
  },

  topText: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#c4c4c4",
  },
});
