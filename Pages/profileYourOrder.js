import React, {Component} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import YourOrderComponent from '../component/yourOrderComponent';
import {useNavigation} from '@react-navigation/native';

function ProfileYourOrder() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Pressable
        onPress={() => {
          navigation.navigate('Rate Order');
        }}>
        <YourOrderComponent />
      </Pressable>
    </View>
  );
}
export default ProfileYourOrder;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: 'white',
  },
});
