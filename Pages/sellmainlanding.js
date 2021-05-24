import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default class sellmainlanding extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.sellbackgroundimage}
          source={require("../assets/sellbackground.png")}
        />
        <ImageBackground
          style={styles.sellbackgroundimage2}
          source={require("../assets/sellbackground2.png")}
        >
          <View style={styles.sellcontentcontainer}>
            <View style={styles.sellcontenwrapper}>
              <View style={styles.selltextcontainer1}>
                <Text style={styles.selltextstyling}>* lorem Ipsum </Text>
                <Text style={styles.selltextstyling}>* lorem ipsum</Text>
              </View>
              <View style={styles.selltextcontainer1}>
                <Text style={styles.selltextstyling}>* Lorem Ipsum</Text>
                <Text style={styles.selltextstyling}>* lorem ipsum</Text>
              </View>
              <View style={styles.selltextcontainer1}>
                <Text style={styles.selltextstyling}>* Lorem Ipsum</Text>
                <Text style={styles.selltextstyling}>* lorem ipsum</Text>
              </View>
            </View>
          </View>
          <View style={styles.selltextcontainer1}>
            <TouchableWithoutFeedback
              onPress={() =>
                this.props.navigation.navigate("Selltabnavigation")
              }
            >
              <View style={styles.sellbeasellerbutton}>
                <Text style={styles.selljoinustext}>Join Us</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sellbackgroundimage: {
    width: "100%",
    height: 380,
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  sellbackgroundimage2: {
    width: "100%",
    height: 455,
    resizeMode: "contain",
  },
  sellcontentcontainer: {
    justifyContent: "center",
    height: "75%",
  },
  sellcontenwrapper: {
    marginTop: 90,
  },
  selltextcontainer1: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  selltextstyling: {
    fontSize: 16,
    color: "#fff",
  },
  sellbeasellerbutton: {
    height: 44,
    width: 185,
    backgroundColor: "#ffcf08",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  selljoinustext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
