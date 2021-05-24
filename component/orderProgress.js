import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import SellIcon from "../assets/JSX_SVG/sell_icon";
var flag = false;
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const orderProgress = () => {
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
    if (progress < 49) {
      setProgress(progress + 5);
    }
    if (progress == 50 && true) {
      setProgress(progress + 1);
      flag = true;
    }
    if (progress > 50 && flag && progress < 100) {
      setProgress(progress + 5);
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const progresswidth = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const iconprogress = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100],
  });

  return (
    <SafeAreaView style={styles.orderProgressParentContainer}>
      <View style={{ marginBottom: 40 }}>
        <Text>Shivam Ranas Kitchen</Text>
        <Text>
          {iconprogress.__getValue() < 51
            ? "Preparing your order"
            : iconprogress.__getValue() < 91
            ? "On your way"
            : "Reached"}
        </Text>
        <Text>Arrives in 16-24 mins</Text>
      </View>
      <View style={styles.progressBarMainContainer}>
        <View style={styles.progressBarwrapper}>
          <View style={styles.progressBar}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill],
                {
                  backgroundColor: "#552e30",
                  width: progresswidth,
                  borderRadius: 10,
                })
              }
            />
          </View>
          <View style={styles.iconcontainer}>
            <SellIcon
              height={35}
              width={35}
              color={iconprogress.__getValue() > 0 ? "#552e30" : "gray"}
            />
            <SellIcon
              height={35}
              width={35}
              color={iconprogress.__getValue() > 51 ? "#552e30" : "gray"}
            />
            <SellIcon
              height={35}
              width={35}
              color={iconprogress.__getValue() > 91 ? "#552e30" : "gray"}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default orderProgress;

const styles = StyleSheet.create({
  orderProgressParentContainer: {
    backgroundColor: "#ecf0f1",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 10,
  },
  progressBarMainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  progressBarwrapper: {
    width: 310,
  },
  progressBar: {
    flexDirection: "row",
    height: 5,
    width: 310,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  iconcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -20,
  },
});
