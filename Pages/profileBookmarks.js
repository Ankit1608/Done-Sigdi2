import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Chefcard from '../component/chefcard';

class ProfileBookmarks extends Component {
  state = {
    listing: [
      {
        id: 1,
        title: 'Sukhi da Dhaba',
        subtitle: 'Kadhi Bowl',
        image: require('../assets/kadhi.png'),
        profile: require('../assets/cook1.jpg'),
        mark: require('../assets/veg.png'),
        price: '50',
        rating: '3.5',
      },
      {
        id: 2,
        title: 'Rounak singh',
        subtitle: 'Rajma Bowl',
        image: require('../assets/rajma.png'),
        profile: require('../assets/cook1.jpg'),
        mark: require('../assets/veg.png'),
        price: '50',
        rating: '3.5',
      },
      {
        id: 3,
        title: 'Porus ka Swad',
        subtitle: 'Rajma, Kadhi, 5roti',
        image: require('../assets/thali.png'),
        profile: require('../assets/cook1.jpg'),
        mark: require('../assets/veg.png'),
        price: '50',
        rating: '3.5',
      },
    ],
  };

  handleAdd = () => {};

  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.bookmarkContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              legacyImplementation={false}
              data={this.state.listing}
              keyExtractor={(listing) => listing.id.toString()}
              renderItem={({item}) => (
                <Chefcard
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                  profile={item.profile}
                  rating={item.rating}></Chefcard>
              )}></FlatList>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ProfileBookmarks;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    backgroundColor: 'white',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  headingText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  bookmarkContainer: {
    alignItems: 'center',
  },
});
