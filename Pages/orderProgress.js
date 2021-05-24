import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import OrderDetailsComponent from "../component/orderDetailsComponent";

class OrderProgress extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.deliveredContainer}>
            <Image
              source={require("../assets/delivered.png")}
              style={styles.deliveredImg}
            />
          </View>
          <View style={styles.feedbackContainer}>
            <TouchableOpacity>
              <View>
                <Text style={styles.feedbackText}>Write a review</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Text style={styles.feedbackText}>Raise an issue</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.orderDetailsContainer}>
            <Text style={styles.Headings}>Order Details</Text>

            <OrderDetailsComponent />
          </View>
          <View style={styles.billDetailsContainer}>
            <Text style={styles.Headings}>Bill Details</Text>
            <View style={styles.billItems}>
              <Text>Item Total</Text>
              <View style={styles.rupeeContainer}>
                <Image
                  source={require("../assets/rupeesymbol.png")}
                  style={styles.rupee}
                />
                <Text>70</Text>
              </View>
            </View>
            <View style={styles.billItems}>
              <Text>Delivery Charges</Text>
              <View style={styles.rupeeContainer}>
                <Image
                  source={require("../assets/rupeesymbol.png")}
                  style={styles.rupee}
                />
                <Text>20</Text>
              </View>
            </View>
            <View style={styles.billItems}>
              <Text>Delivery Tip</Text>
              <View style={styles.rupeeContainer}>
                <Image
                  source={require("../assets/rupeesymbol.png")}
                  style={styles.rupee}
                />
                <Text>0</Text>
              </View>
            </View>
            <View style={styles.billItemsTotal}>
              <Text>Grand Total</Text>
              <View style={styles.rupeeContainer}>
                <Image
                  source={require("../assets/rupeesymbol.png")}
                  style={styles.rupee}
                />
                <Text style={{ fontWeight: "bold" }}>90</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.Headings}>Driver Details</Text>
            <View style={styles.driverContainer}>
              <Image
                source={require("../assets/driver.png")}
                style={styles.driverImg}
              />
              <View style={styles.driverDetails}>
                <Text style={styles.driverName}>Kumar Ankit</Text>
                <Text>+91 8686959744</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default OrderProgress;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    marginTop: 35,
    marginLeft: 20,
    marginRight: 20,
  },
  deliveredContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  deliveredImg: {
    height: 150,
    width: 150,
    marginBottom: 15,
  },
  feedbackContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  feedbackText: {
    color: "#FCCF08",
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderWidth: 0.75,
    borderColor: "#FCCF08",
    borderRadius: 20,
  },
  Headings: {
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 10,
    fontSize: 18,
  },
  orderDetailsContainer: {
    marginBottom: 30,
  },
  billDetailsContainer: {
    marginBottom: 30,
  },

  billItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  billItemsTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    fontWeight: "bold",
  },

  driverContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  driverImg: {
    height: 70,
    width: 70,
    borderRadius: 35,
    overflow: "hidden",
  },
  driverDetails: {
    marginLeft: 20,
  },
  driverName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  rupee: {
    height: 10,
    width: 10,
    marginRight: 1,
    resizeMode: "contain",
  },
  rupeeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
