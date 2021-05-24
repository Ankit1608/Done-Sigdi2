import React, { Component, useState } from "react";

import {
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

import CartItem from "../component/cartItem";
import TimeSelection from "../component/timeSelection";
import { Subscribe } from "unstated";
import StateContainer from "../container/container";

const deviceHeight = Dimensions.get("window").height;

export default class CartPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      day: false,
    };
  }

  listing = [
    { id: 1, time: "10 :00" },
    { id: 2, time: "11 :00" },
    { id: 3, time: "12 :00" },
    { id: 4, time: "13 :00" },
    { id: 5, time: "14 :00" },
    { id: 6, time: "15 :00" },
    { id: 7, time: "16 :00" },
    { id: 8, time: "17 :00" },
    { id: 9, time: "18 :00" },
    { id: 10, time: "19 :00" },
    { id: 11, time: "20 :00" },
    { id: 12, time: "21 :00" },
  ];
  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };

  renderOutsideTouchable(onTouch) {
    const view = <View style={{ flex: 1, width: "100%" }} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: "100%" }}
      >
        {view}
      </TouchableWithoutFeedback>
    );
  }

  todaydate = () => {
    this.setState({ day: false });
  };

  tomorrowdate = () => {
    this.setState({ day: true });
  };

  render() {
    let { show } = this.state;
    const { onTouchOutside } = this.props;
    let deliveryCharges = 10;
    return (
      <Subscribe to={[StateContainer]}>
        {(statecontainer) => (
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={show}
            onRequestClose={this.close}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "grey",
                justifyContent: "flex-end",
              }}
            >
              {this.renderOutsideTouchable(onTouchOutside)}
              <View
                style={{
                  backgroundColor: "#ffffff",
                  width: "100%",
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  paddingHorizontal: 10,
                  maxHeight: deviceHeight * 0.8,
                }}
              >
                <View>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.locationContainer}>
                      <Image
                        source={require("../assets/location.png")}
                        style={styles.locationimg}
                      />
                      <Text style={styles.locationDelivery}>Delivery at </Text>
                      <Text numberOfLines={1} style={{ maxWidth: "60%" }}>
                        Parmila Enclave, Kalyan Nagar Venture- 3, Hyderabad-18
                      </Text>
                    </View>
                    <View style={styles.clockContainer}>
                      <Image
                        source={require("../assets/clock.png")}
                        style={styles.clockimg}
                      />
                      <Text style={styles.locationDelivery}>Delivery at </Text>
                      <Text>40mins</Text>
                    </View>
                    <View style={styles.itemContainer}>
                      <FlatList
                        data={statecontainer.itemlist()}
                        keyExtractor={(list) => list.id.toString()}
                        renderItem={({ item }) => <CartItem item={item} />}
                      ></FlatList>
                    </View>
                    <View style={styles.daycontainer}>
                      <TouchableWithoutFeedback onPress={this.todaydate}>
                        <View>
                          <Text
                            style={{
                              borderBottomWidth: 1.5,
                              borderBottomColor: this.state.day
                                ? "#E0E0E0"
                                : "#FCCF08",
                            }}
                          >
                            Today{" "}
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>

                      <Text style={{ color: "#838383" }}> | </Text>
                      <TouchableWithoutFeedback onPress={this.tomorrowdate}>
                        <View>
                          <Text
                            style={{
                              borderBottomWidth: 1.5,
                              borderBottomColor: this.state.day
                                ? "#FCCF08"
                                : "#E0E0E0",
                            }}
                          >
                            {" "}
                            Tomorrow
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                    >
                      <FlatList
                        data={this.listing}
                        keyExtractor={(listing) => listing.id.toString()}
                        numColumns={6}
                        renderItem={({ item }) => (
                          <TimeSelection timeDisplay={item.time} />
                        )}
                      ></FlatList>
                    </ScrollView>
                    <View style={styles.tipContainer}>
                      <Text style={styles.tipHeader}>Tip your rider</Text>
                      <Text style={styles.tipDes}>
                        Support your delivery partner throught these tough times
                        with a tip.
                      </Text>
                      <View style={styles.tipAmountContainer}>
                        <TouchableWithoutFeedback
                          onPress={() => statecontainer.setDeliveryTip(20)}
                        >
                          <Text
                            style={
                              statecontainer.state.deliveryTip === 20
                                ? styles.tipAmountAct
                                : styles.tipAmount
                            }
                          >
                            Rs.20
                          </Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                          onPress={() => statecontainer.setDeliveryTip(30)}
                        >
                          <Text
                            style={
                              statecontainer.state.deliveryTip === 30
                                ? styles.tipAmountAct
                                : styles.tipAmount
                            }
                          >
                            Rs.30
                          </Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                          onPress={() => statecontainer.setDeliveryTip(50)}
                        >
                          <Text
                            style={
                              statecontainer.state.deliveryTip === 50
                                ? styles.tipAmountAct
                                : styles.tipAmount
                            }
                          >
                            Rs.50
                          </Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                          onPress={() => statecontainer.setDeliveryTip(0)}
                        >
                          <Text
                            style={
                              statecontainer.state.deliveryTip === 0
                                ? styles.tipAmountAct
                                : styles.tipAmount
                            }
                          >
                            None
                          </Text>
                        </TouchableWithoutFeedback>
                      </View>
                    </View>
                    <View style={styles.billContainer}>
                      <Text style={styles.billHeading}>Bill Details</Text>
                      <View style={styles.billitem}>
                        <Text>Item Total</Text>
                        <Text>{statecontainer.state.totalAmount}</Text>
                      </View>
                      <View style={styles.billitem}>
                        <Text>Delivery Charges</Text>
                        <Text>{deliveryCharges}</Text>
                      </View>
                      <View style={styles.billitem}>
                        <Text>Delivery Tip</Text>
                        <Text>{statecontainer.state.deliveryTip}</Text>
                      </View>
                      <View style={styles.billitem}>
                        <Text style={styles.billtotal}>Grand Total</Text>
                        <Text style={styles.billtotal}>
                          {deliveryCharges +
                            statecontainer.state.totalAmount +
                            statecontainer.state.deliveryTip}
                        </Text>
                      </View>
                    </View>
                  </ScrollView>
                  <View style={styles.paymentContainer}>
                    <View style={styles.paymentUsing}>
                      <Text>Pay Using</Text>
                    </View>
                    <View style={styles.paymentAmount}>
                      <View>
                        <Text style={{ color: "#ffffff" }}>
                          {deliveryCharges +
                            statecontainer.state.totalAmount +
                            statecontainer.state.deliveryTip}
                        </Text>
                        <Text style={{ color: "#ffffff", fontSize: 10 }}>
                          TOTAL
                        </Text>
                      </View>
                      <Text style={{ color: "#ffffff" }}>Proceed to Pay</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        )}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
  locationDelivery: {
    color: "#838383",
  },
  locationimg: {
    height: 22,
    width: 15,
    marginRight: 10,
  },
  clockimg: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  clockContainer: {
    flexDirection: "row",
    width: "100%",
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 0.8,
    borderBottomColor: "#E0E0E0",
    alignItems: "center",
  },
  itemContainer: {
    paddingBottom: 25,
    borderBottomWidth: 0.8,
    borderBottomColor: "#E0E0E0",
  },
  daycontainer: {
    flexDirection: "row",
  },
  tipContainer: {
    backgroundColor: "#F5F4F4",
  },
  tipHeader: {
    fontSize: 16,
    margin: 15,
    marginTop: 20,
    marginLeft: 5,
  },
  tipDes: {
    fontSize: 10,
    margin: 10,
    marginBottom: 20,
    marginTop: 0,
  },
  tipAmountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tipAmount: {
    padding: 5,
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#C4C4C4",
    borderRadius: 5,
    margin: 5,
    color: "grey",
  },
  tipAmountAct: {
    padding: 5,
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#FCCF08",
    borderRadius: 5,
    margin: 5,
    color: "#FCCF08",
  },
  billContainer: {
    margin: 10,
    marginTop: 25,
    marginBottom: 100,
  },
  billHeading: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  billitem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  billtotal: {
    fontWeight: "bold",
  },
  paymentContainer: {
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    bottom: 0,
    borderRadius: 10,
    overflow: "hidden",
  },
  paymentUsing: {
    flex: 2,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#c4c4c4",
    padding: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  paymentAmount: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#FCCF08",
    padding: 15,
  },
});
