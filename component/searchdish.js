import React from "react";
import { StyleSheet, Text, SafeAreaView, Image, View } from "react-native";

export default function Searchdish({ image, name }) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        paddingBottom: 10,
      }}
    >
      <Image
        source={image}
        style={{
          height: 70,
          width: 70,
          borderRadius: 35,
          marginRight: 20,
        }}
      />
      <View style={{ flexDirection: "column", justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold" }}>{name}</Text>
        <Text
          style={{
            color: "#838383",
          }}
        >
          Dish
        </Text>
      </View>
    </View>
  );
}
