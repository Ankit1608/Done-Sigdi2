import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OrderProgress from "../component/orderProgress";

function runningOrder() {
  currorder = [
    {
      seller: "Rana's Kitchen",
      minLower: 16,
      minUpper: 24,
      width: 100,
    },
  ];
  return (
    <>
      <OrderProgress
        seller="Rana's Kitchen"
        minLower={16}
        minUpper={24}
        width={100}
      />
    </>
  );
}

const styles = StyleSheet.create({});
export default runningOrder;
