import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import YourOrderComponent from '../component/yourOrderComponent';

class RateOrder extends Component {
  state = {
    rating: 0,
  };

  handlerating(i) {
    this.setState({rating: i + 1});
  }

  render() {
    var starsContainer = [];
    for (let i = 0; i < 5; i++) {
      if (i < this.state.rating) {
        starsContainer.push(
          <TouchableOpacity onPress={() => this.handlerating(i)}>
            <Image
              source={require('../assets/star.png')}
              style={styles.starimg}
              key={i}
            />
          </TouchableOpacity>,
        );
      } else {
        starsContainer.push(
          <TouchableOpacity onPress={() => this.handlerating(i)}>
            <Image
              source={require('../assets/stargray.png')}
              style={styles.starimg}
              key={i}
            />
          </TouchableOpacity>,
        );
      }
    }
    return (
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <YourOrderComponent rating={true} />
          {true && (
            <View>
              <View style={styles.ratingContainer}>
                <Text>Leave a Rating</Text>
                <View style={styles.starContainer}>{starsContainer}</View>
              </View>
              <View>
                <Text>Leave a review</Text>
                <TextInput
                  style={styles.review}
                  numberOfLines={15}
                  multiline={true}
                  placeholder={'Write your review'}
                />
              </View>
            </View>
          )}
          {false && (
            <View style={styles.concernContainer}>
              <Text style={styles.concernText}>Write to us</Text>
              <TextInput
                style={styles.review}
                numberOfLines={15}
                multiline={true}
                placeholder={'Write your concern'}
              />
            </View>
          )}

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
                Submit
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default RateOrder;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
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
  ratingContainer: {
    marginTop: 20,
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
  },
  starimg: {
    height: 25,
    width: 25,
    marginRight: 5,
  },
  review: {
    alignItems: 'flex-start',
    textAlignVertical: 'top',
    borderWidth: 1.5,
    borderColor: '#F2F2F2',
  },
  savechangescontainer: {
    backgroundColor: '#FCCF08',
    borderRadius: 30,
  },
  concernContainer: {
    marginTop: 20,
  },
  concernText: {
    marginTop: 5,
    marginBottom: 10,
  },
});
