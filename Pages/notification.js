import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

import Notification from "../component/notificationcard";

import sellerProfile from "../assets/sellerprofile.png";
import sellerPayment from "../assets/sellerpayment.png";
import sellerNotification from "../assets/sellernotification.png";

const notification = [
  {
    id: 1,
    notificationcontent: "loremipsum fnsadklnlkasklfnkldan",
    date: "07 Jan",
  },
  {
    id: 2,
    notificationcontent: "loremipsum fnsadklnlkasklfnkldan",
    date: "07 Jan",
  },
  {
    id: 3,
    notificationcontent: "loremipsum fnsadklnlkasklfnkldan",
    date: "07 Jan",
  },
];

function App() {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View>
          <Image source={sellerProfile} style={{ height: 30, width: 30 }} />
        </View>
        <View>
          <Image source={sellerPayment} style={{ height: 30, width: 30 }} />
        </View>
        <View>
          <Image
            source={sellerNotification}
            style={{ height: 30, width: 30 }}
          />
        </View>
      </View>
      <ScrollView>
        <FlatList
          data={notification}
          keyExtractor={(notification) => notification.id.toString()}
          renderItem={({ item }) => (
            <Notification
              notcont={item.notificationcontent}
              notdate={item.date}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
