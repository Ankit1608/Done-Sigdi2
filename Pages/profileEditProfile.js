import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';

class ProfileEditProfile extends Component {
  state = {
    name: 'nithin',
    email: 'abc@abc.com',
    phonenumber: '1234567890',
  };
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.mainWrapper}>
          <View>
            <View style={styles.inputContainer}>
              <Text style={{color: '#838383'}}>Name</Text>
              <TextInput
                style={styles.input}
                value={this.state.name}
                onChangeText={(val) => this.setState({name: val})}></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{color: '#838383'}}>Email</Text>
              <TextInput
                style={styles.input2}
                value={this.state.email}></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{color: '#838383'}}>Phonenumber</Text>
              <TextInput
                style={styles.input2}
                value={this.state.phonenumber}></TextInput>
            </View>
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
      </SafeAreaView>
    );
  }
}

export default ProfileEditProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainWrapper: {
    margin: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  input: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
  },
  input2: {
    backgroundColor: '#eaeaea',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
  },
  savechangescontainer: {
    backgroundColor: '#FCCF08',
    borderRadius: 30,
  },
});
