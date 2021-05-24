import React, { Component } from "react";
import {
  ImageBackground,
  SafeAreaView,
  View,
  Image,
  Dimensions,
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import SellerOrderCard from "../component/sellerOrderCard";
import SellerPreOrderCard from "../component/sellerPreOrderCard";

const listing = [
  {
    id: 1,
    image: require("../assets/kadhi.png"),
    mark: require("../assets/veg.png"),
    name: "Rajma Bowl",
    price: 50,
    quantity: 0,
    stock: 5,
  },

  {
    id: 2,
    image: require("../assets/kadhi.png"),
    mark: require("../assets/veg.png"),
    name: "Rajma Bowl",
    price: 70,
    quantity: 0,
    stock: 2,
  },

  {
    id: 3,
    image: require("../assets/kadhi.png"),
    mark: require("../assets/veg.png"),
    name: "Rajma Bowl",
    price: 100,
    quantity: 0,
    stock: 1,
  },
];

class profile extends Component {
  windowWidth = Dimensions.get("window").width;
  state = {
    open: true,
  };

  render() {
    return (
      <SafeAreaView style={{ overflow: "hidden" }}>
        <ScrollView>
          <View style={{ borderColor: "#ffc408", borderWidth: 2 }}>
            <ImageBackground
              style={{
                height: 250,
                width: "100%",
                resizeMode: "contain",
              }}
              source={require("../assets/cover.png")}
            ></ImageBackground>
          </View>
          <View style={{ height: 48 }}>
            <Image
              style={{
                position: "absolute",
                bottom: 0,
                borderColor: "#ffc408",
                borderWidth: 2,
                left: this.windowWidth / 2 - 48,
                height: 96,
                width: 96,
                borderRadius: 100,
              }}
              source={require("../assets/cook2.jpg")}
            />
          </View>
          <View style={{ borderBottomWidth: 4, borderBottomColor: "#eaeaea" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
                paddingBottom: 20,
              }}
            >
              <View
                style={{
                  marginHorizontal: 10,
                  paddingBottom: 5,
                  borderBottomColor: "#eaeaea",
                  borderBottomWidth: 1,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Shivams Kitchen
                </Text>
                <Text>North Indian, Punjabi</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text>Madhapur</Text>
                  <Text> |</Text>
                  <Text>3.0 km</Text>
                </View>
                <Text
                  style={{ color: this.state.open ? "#068542" : "#710f11" }}
                >
                  {this.state.open ? "Open Now" : "Closed"}
                </Text>
              </View>

              <View style={{ justifyContent: "center", marginHorizontal: 10 }}>
                <View>
                  <Text>stars</Text>
                </View>
                <View>
                  <Text>time</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("EditSellerProfile")
              }
            >
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#E0E0E0",
                  alignItems: "center",
                  borderRadius: 5,
                  padding: 5,
                  margin: 5,
                  marginBottom: 20,
                }}
              >
                <Text>Edit Profile</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginHorizontal: 10,
              marginTop: 10,
              borderBottomWidth: 4,
              borderBottomColor: "#eaeaea",
              paddingBottom: 20,
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 16, paddingBottom: 5 }}
            >
              About
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A eni
              scelerisque id id. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. A eni celerisque id id.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.setState({ open: !this.state.open })}
          >
            <View
              style={{
                backgroundColor: this.state.open ? "#068542" : "#710f11",
                borderWidth: 0.2,
                borderColor: "#FCFCFC",
                padding: 5,
                margin: 5,
                borderRadius: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#ffffff", fontSize: 16 }}>
                {this.state.open ? "Open Now" : "Closed"}
              </Text>
            </View>
          </TouchableOpacity>
          <SellerOrderCard
            image={listing[0].image}
            mark={listing[0].mark}
            name={listing[0].name}
            price={listing[0].price}
            stock={listing[0].stock}
          />
          <SellerPreOrderCard
            image={listing[0].image}
            mark={listing[0].mark}
            name={listing[0].name}
            price={listing[0].price}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default profile;
