import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Image } from "react-native";

function Circlecard({ img, txt }) {
  return (
    <SafeAreaView>
      <View style={{ alignItems: "center", marginRight: 60, marginBottom: 40 }}>
        <Image
          source={img}
          style={{
            borderRadius: 100,
            height: 80,
            width: 80,
            resizeMode: "contain",
          }}
        />

        <Text>{txt}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default Circlecard;
