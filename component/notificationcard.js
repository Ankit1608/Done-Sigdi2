import React from "react";
import { View, Image, Text } from "react-native";
import logo from "../assets/Logo.png";

function notificationComponent({ notcont, notdate }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "#c4c4c4",
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginBottom: 5,
      }}
    >
      <Image
        source={logo}
        style={{
          marginRight: 15,
          resizeMode: "contain",
          height: 60,
          width: 60,
        }}
      />
      <View style={{ justifyContent: "space-between" }}>
        <Text style={{ fontSize: 16 }}>{notcont}</Text>
        <Text style={{ fontSize: 16, color: "gray" }}>{notdate}</Text>
      </View>
    </View>
  );
}
export default notificationComponent;
