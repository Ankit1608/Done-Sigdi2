import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

class EditSellerProfile extends Component {
  state = {
    name: 'Nithinsai',
    about: 'i cook good, Very good, buy my food or i die poor',
    location: 'Madhapur',
    northindia: false,
    southindia: false,
    chinese: false,
    hyderabadi: false,
    gujrati: false,
    bengali: false,
    punjabi: false,
    other: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={{color: '#838383'}}>Name</Text>
          <TextInput
            style={styles.input}
            value={this.state.name}
            onChangeText={(val) => this.setState({name: val})}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{color: '#838383'}}>About</Text>
          <TextInput
            style={styles.input}
            value={this.state.about}
            onChangeText={(val) => this.setState({about: val})}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{color: '#838383'}}>Location</Text>
          <TextInput
            style={styles.input}
            value={this.state.location}
            onChangeText={(val) => this.setState({location: val})}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{color: '#838383'}}>Cusines</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({northindia: !this.state.northindia})
                  }>
                  <View
                    style={
                      this.state.northindia
                        ? styles.cusinesSelectedContainer
                        : styles.cusinesSelectContainer
                    }>
                    <Text
                      style={
                        this.state.northindia
                          ? {color: '#FCCF08'}
                          : {color: '#000000'}
                      }>
                      North Indian
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({punjabi: !this.state.punjabi})}>
                  <View
                    style={
                      this.state.punjabi
                        ? styles.cusinesSelectedContainer
                        : styles.cusinesSelectContainer
                    }>
                    <Text
                      style={
                        this.state.punjabi
                          ? {color: '#FCCF08'}
                          : {color: '#000000'}
                      }>
                      Punjabi
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({southindia: !this.state.southindia})
                    }>
                    <View
                      style={
                        this.state.southindia
                          ? styles.cusinesSelectedContainer
                          : styles.cusinesSelectContainer
                      }>
                      <Text
                        style={
                          this.state.southindia
                            ? {color: '#FCCF08'}
                            : {color: '#000000'}
                        }>
                        South Indian
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({gujrati: !this.state.gujrati})
                    }>
                    <View
                      style={
                        this.state.gujrati
                          ? styles.cusinesSelectedContainer
                          : styles.cusinesSelectContainer
                      }>
                      <Text
                        style={
                          this.state.gujrati
                            ? {color: '#FCCF08'}
                            : {color: '#000000'}
                        }>
                        Gujrati
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => this.setState({chinese: !this.state.chinese})}>
                  <View
                    style={
                      this.state.chinese
                        ? styles.cusinesSelectedContainer
                        : styles.cusinesSelectContainer
                    }>
                    <Text
                      style={
                        this.state.chinese
                          ? {color: '#FCCF08'}
                          : {color: '#000000'}
                      }>
                      Chinese
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({bengali: !this.state.bengali})}>
                  <View
                    style={
                      this.state.bengali
                        ? styles.cusinesSelectedContainer
                        : styles.cusinesSelectContainer
                    }>
                    <Text
                      style={
                        this.state.bengali
                          ? {color: '#FCCF08'}
                          : {color: '#000000'}
                      }>
                      Bengali
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({hyderabadi: !this.state.hyderabadi})
                  }>
                  <View
                    style={
                      this.state.hyderabadi
                        ? styles.cusinesSelectedContainer
                        : styles.cusinesSelectContainer
                    }>
                    <Text
                      style={
                        this.state.hyderabadi
                          ? {color: '#FCCF08'}
                          : {color: '#000000'}
                      }>
                      Hyderabadi
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({other: !this.state.other})}>
                  <View
                    style={
                      this.state.other
                        ? styles.cusinesSelectedContainer
                        : styles.cusinesSelectContainer
                    }>
                    <Text
                      style={
                        this.state.other
                          ? {color: '#FCCF08'}
                          : {color: '#000000'}
                      }>
                      Other
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View style={styles.savechangescontainer}>
            <Text
              style={{
                fontSize: 20,
                paddingHorizontal: 25,
                paddingVertical: 10,
                color: '#ffffff',
              }}>
              Save Changes
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default EditSellerProfile;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginTop: 30,
  },
  input: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
  },
  cusinesSelectContainer: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 10,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 17,
    opacity: 0.4,
  },
  cusinesSelectedContainer: {
    borderWidth: 1,
    borderColor: '#FCCF08',
    color: '#FCCF08',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 10,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 17,
  },
  savechangescontainer: {
    backgroundColor: '#FCCF08',
    borderRadius: 30,
  },
});
