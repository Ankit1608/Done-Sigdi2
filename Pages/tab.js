import React, { useState, Children } from "react";
import { View, Text, Dimensions, Animated } from "react-native";
import { BorderlessButton, ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const yellowpoint = [width * 0.16, width * 0.5, width * 0.83];
const moduleview = [0, -width, -width * 2];

function Tab({ tabs, children }) {
  const [index, setIndex] = useState(0);
  const [previousdot, setPreviousdot] = useState(index);

  const Selectedpoint = yellowpoint[index];
  const Selectedmodule = moduleview[index];

  let dotAnim = new Animated.Value(yellowpoint[previousdot]);
  Animated.timing(dotAnim, {
    toValue: Selectedpoint,
    duration: 650,
    useNativeDriver: true,
  }).start();

  let modAnim = new Animated.Value(moduleview[previousdot]);
  Animated.timing(modAnim, {
    toValue: Selectedmodule,
    duration: 650,
    useNativeDriver: true,
  }).start();

  function handleClick(i) {
    setPreviousdot(index);
    setIndex(i);
  }

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", paddingBottom: 5 }}>
          {tabs.map((tab, i) => (
            <BorderlessButton
              style={{ flex: 1 }}
              key={i}
              onPress={() => handleClick(i)}
            >
              <View style={{ flex: 1, marginTop: 20, paddingVertical: 5 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                  }}
                >
                  {tab.title}
                </Text>
              </View>
            </BorderlessButton>
          ))}
          <Animated.View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 7,
              width: 7,
              backgroundColor: "#ffc408",
              borderRadius: 5,

              transform: [{ translateX: dotAnim }],
            }}
          />
        </View>
        <Animated.View
          style={{
            marginVertical: 30,
            width: width * tabs.length,
            flexDirection: "row",
            transform: [{ translateX: modAnim }],
          }}
        >
          {Children.map(children, (child, index) => (
            <View key={index} style={{ flex: 1, width: width }}>
              {child}
            </View>
          ))}
        </Animated.View>
      </View>
    </ScrollView>
  );
}

export default Tab;
