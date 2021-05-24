import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import AddressBookComponent from "../component/addressBookComponent";

class ProfileAddressBook extends Component {
  state = {
    listing: [
      {
        id: 1,
        addresstype: "home",
        address:
          "dsvakrmfoierjgoiejtiodjfibvnroitgjqeirgndengta dengtaaaaaaasckmvjrnvjjjj",
      },
      {
        id: 2,
        addresstype: "office",
        address:
          "dsvnkejrngoiergpoaerdengta dengearngvmeoaekrtaaaaaaasckmvjrnvjjjj",
      },
      {
        id: 3,
        addresstype: "chill",
        address:
          "dsvndengtaekjrnfoaier dengtaaaaaaaslmrfgoiegjoiejrgockmvjrnvjjjj",
      },
    ],
  };

  handleAdd = () => {};

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Image source={require("../assets/edit.png")} />
          <Text style={styles.headingText}>Address Book</Text>
        </View>
        <FlatList
          data={this.state.listing}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <AddressBookComponent
              addresstype={item.addresstype}
              address={item.address}
            />
          )}
        ></FlatList>
        <TouchableOpacity onPress={this.handleAdd}>
          <View style={styles.addContainer}>
            <Text style={{ color: "#552E30" }}>ADD+</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <View style={styles.savechangescontainer}>
            <Text
              style={{
                fontSize: 20,
                paddingHorizontal: 25,
                paddingVertical: 10,
                color: "#ffffff",
              }}
            >
              Save Changes
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ProfileAddressBook;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    margin: 20,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headingText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "bold",
  },
  addContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    padding: 5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
  },
  savechangescontainer: {
    backgroundColor: "#FCCF08",
    borderRadius: 30,
  },
});
