import { configure, intercept } from "mobx";
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { ActionSheet, Root } from "native-base";
import ImagePicker from "react-native-image-crop-picker";

import RadioButton from "../component/radioButton";

const PROP = [
  {
    key: "veg",
    text: "Veg",
  },
  {
    key: "nonveg",
    text: "Non Veg",
  },
];

class EditSellerProfile extends Component {
  state = {
    name: "",
    price: 0,
    timetaken: 0,
    northindia: false,
    southindia: false,
    chinese: false,
    hyderabadi: false,
    gujrati: false,
    bengali: false,
    punjabi: false,
    other: false,
    ingravey: false,
    inbread: false,
    inrice: false,
    indessert: false,
    incombo: false,
    inbeverages: false,
    insnacks: false,
    inother: false,
    imgsrc: undefined,
  };

  onSelectedImage = (image) => {
    const source = { uri: image.path };
    this.setState({ imgsrc: source });
  };

  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      this.onSelectedImage(image);
    });
  };
  choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 200,
      cropping: true,
    }).then((image) => {
      this.onSelectedImage(image);
    });
  };

  addImage = () => {
    const BUTTONS = ["Take Photo", "Choose Photo Library", "Cancel"];
    ActionSheet.show(
      { options: BUTTONS, cancelButtonIndex: 2, title: "Select a Photo" },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.takePhotoFromCamera();
            break;
          case 1:
            this.choosePhotoFromLibrary();
            break;
          default:
            break;
        }
      }
    );
  };

  render() {
    return (
      <Root>
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity onPress={this.addImage}>
              <View style={styles.imageContainer}>
                {this.state.imgsrc === undefined ? (
                  <ImageBackground
                    source={require("../assets/uploadimage.png")}
                    style={styles.backgroundimg}
                  >
                    <Text style={{ fontSize: 20 }}>Upload a Picture</Text>
                  </ImageBackground>
                ) : (
                  <Image source={this.state.imgsrc} />
                )}
              </View>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <Text style={{ color: "#838383" }}>Name of the dish</Text>
              <TextInput
                style={styles.input}
                value={this.state.name}
                onChangeText={(val) => this.setState({ name: val })}
              ></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ color: "#838383" }}>Price of dish</Text>
              <TextInput
                keyboardType={"numeric"}
                style={styles.input}
                value={this.state.price}
                onChangeText={(val) => this.setState({ price: parseInt(val) })}
              ></TextInput>
              {this.state.price > 0 && (
                <Text>
                  the amount you get is{" "}
                  {parseFloat(this.state.price * 0.85).toFixed(2)} (tds:
                  {parseFloat(this.state.price * 0.05).toFixed(2)} and our
                  charges: {parseFloat(this.state.price * 0.1).toFixed(2)})
                </Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ color: "#838383" }}>
                Time taken to prepare the dish (in minutes)
              </Text>
              <TextInput
                keyboardType={"numeric"}
                style={styles.input}
                value={this.state.timetaken}
                onChangeText={(val) =>
                  this.setState({ timetaken: parseInt(val) })
                }
              ></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ color: "#838383" }}>Category</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ ingravey: !this.state.ingravey })
                      }
                    >
                      <View
                        style={
                          this.state.ingravey
                            ? styles.cusinesSelectedContainer
                            : styles.cusinesSelectContainer
                        }
                      >
                        <Text
                          style={
                            this.state.ingravey
                              ? { color: "#FCCF08" }
                              : { color: "#000000" }
                          }
                        >
                          in Gravey
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ incombo: !this.state.incombo })
                      }
                    >
                      <View
                        style={
                          this.state.incombo
                            ? styles.cusinesSelectedContainer
                            : styles.cusinesSelectContainer
                        }
                      >
                        <Text
                          style={
                            this.state.incombo
                              ? { color: "#FCCF08" }
                              : { color: "#000000" }
                          }
                        >
                          in Combo
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({ inbread: !this.state.inbread })
                        }
                      >
                        <View
                          style={
                            this.state.inbread
                              ? styles.cusinesSelectedContainer
                              : styles.cusinesSelectContainer
                          }
                        >
                          <Text
                            style={
                              this.state.inbread
                                ? { color: "#FCCF08" }
                                : { color: "#000000" }
                            }
                          >
                            in Bread
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            inbeverages: !this.state.inbeverages,
                          })
                        }
                      >
                        <View
                          style={
                            this.state.inbeverages
                              ? styles.cusinesSelectedContainer
                              : styles.cusinesSelectContainer
                          }
                        >
                          <Text
                            style={
                              this.state.inbeverages
                                ? { color: "#FCCF08" }
                                : { color: "#000000" }
                            }
                          >
                            in Baverages
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ inrice: !this.state.inrice })
                      }
                    >
                      <View
                        style={
                          this.state.inrice
                            ? styles.cusinesSelectedContainer
                            : styles.cusinesSelectContainer
                        }
                      >
                        <Text
                          style={
                            this.state.inrice
                              ? { color: "#FCCF08" }
                              : { color: "#000000" }
                          }
                        >
                          in Rice
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ insnacks: !this.state.insnacks })
                      }
                    >
                      <View
                        style={
                          this.state.insnacks
                            ? styles.cusinesSelectedContainer
                            : styles.cusinesSelectContainer
                        }
                      >
                        <Text
                          style={
                            this.state.insnacks
                              ? { color: "#FCCF08" }
                              : { color: "#000000" }
                          }
                        >
                          in Snacks
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ indessert: !this.state.indessert })
                      }
                    >
                      <View
                        style={
                          this.state.indessert
                            ? styles.cusinesSelectedContainer
                            : styles.cusinesSelectContainer
                        }
                      >
                        <Text
                          style={
                            this.state.indessert
                              ? { color: "#FCCF08" }
                              : { color: "#000000" }
                          }
                        >
                          in Dessert
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ inother: !this.state.inother })
                      }
                    >
                      <View
                        style={
                          this.state.inother
                            ? styles.cusinesSelectedContainer
                            : styles.cusinesSelectContainer
                        }
                      >
                        <Text
                          style={
                            this.state.inother
                              ? { color: "#FCCF08" }
                              : { color: "#000000" }
                          }
                        >
                          in Other
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{ color: "#838383" }}>Cusines</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ northindia: !this.state.northindia })
                      }
                    >
                      <View
                        style={
                          this.state.northindia
                            ? styles.cusinesSelectedContainer
                            : styles.cusinesSelectContainer
                        }
                      >
                        <Text
                          style={
                            this.state.northindia
                              ? { color: "#FCCF08" }
                              : { color: "#000000" }
                          }
                        >
                          North Indian
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ punjabi: !this.state.punjabi })
                      }
                    >
                      <View
                        style={
                          this.state.punjabi
                            ? styles.cusinesSelectedContainer
                            : styles.cusinesSelectContainer
                        }
                      >
                        <Text
                          style={
                            this.state.punjabi
                              ? { color: "#FCCF08" }
                              : { color: "#000000" }
                          }
                        >
                          Punjabi
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({ southindia: !this.state.southindia })
                        }
                      >
                        <View
                          style={
                            this.state.southindia
                              ? styles.cusinesSelectedContainer
                              : styles.cusinesSelectContainer
                          }
                        >
                          <Text
                            style={
                              this.state.southindia
                                ? { color: "#FCCF08" }
                                : { color: "#000000" }
                            }
                          >
                            South Indian
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({ gujrati: !this.state.gujrati })
                        }
                      >
                        <View
                          style={
                            this.state.gujrati
                              ? styles.cusinesSelectedContainer
                              : styles.cusinesSelectContainer
                          }
                        >
                          <Text
                            style={
                              this.state.gujrati
                                ? { color: "#FCCF08" }
                                : { color: "#000000" }
                            }
                          >
                            Gujrati
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ chinese: !this.state.chinese })
                      }
                    >
                      <View
                        style={
                          this.state.chinese
                            ? styles.cusinesSelectedContainer
                            : styles.cusinesSelectContainer
                        }
                      >
                        <Text
                          style={
                            this.state.chinese
                              ? { color: "#FCCF08" }
                              : { color: "#000000" }
                          }
                        >
                          Chinese
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ bengali: !this.state.bengali })
                      }
                    >
                      <View
                        style={
                          this.state.bengali
                            ? styles.cusinesSelectedContainer
                            : styles.cusinesSelectContainer
                        }
                      >
                        <Text
                          style={
                            this.state.bengali
                              ? { color: "#FCCF08" }
                              : { color: "#000000" }
                          }
                        >
                          Bengali
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ hyderabadi: !this.state.hyderabadi })
                      }
                    >
                      <View
                        style={
                          this.state.hyderabadi
                            ? styles.cusinesSelectedContainer
                            : styles.cusinesSelectContainer
                        }
                      >
                        <Text
                          style={
                            this.state.hyderabadi
                              ? { color: "#FCCF08" }
                              : { color: "#000000" }
                          }
                        >
                          Hyderabadi
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ other: !this.state.other })
                      }
                    >
                      <View
                        style={
                          this.state.other
                            ? styles.cusinesSelectedContainer
                            : styles.cusinesSelectContainer
                        }
                      >
                        <Text
                          style={
                            this.state.other
                              ? { color: "#FCCF08" }
                              : { color: "#000000" }
                          }
                        >
                          Other
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
            <RadioButton PROP={PROP} />
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
                  Upload Dish
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Root>
    );
  }
}

export default EditSellerProfile;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginTop: 30,
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    left: 30,
    height: 200,
    width: 300,
    resizeMode: "contain",
    backgroundColor: "#F5F5F5",
  },
  backgroundimg: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    padding: 20,
  },

  input: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
  },
  cusinesSelectContainer: {
    borderWidth: 1,
    borderColor: "#000000",
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 10,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 17,
    opacity: 0.4,
  },
  cusinesSelectedContainer: {
    borderWidth: 1,
    borderColor: "#FCCF08",
    color: "#FCCF08",
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 10,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 17,
  },
  savechangescontainer: {
    backgroundColor: "#FCCF08",
    borderRadius: 30,
  },
});
