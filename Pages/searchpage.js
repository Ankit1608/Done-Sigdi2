import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  Platform,
  StatusBar,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import _ from 'lodash';

import Searchdish from '../component/searchdish';
import Searchcook from '../component/searchcook';

const listing_dish = [
  {
    id: 1,
    image: require('../assets/kadhi.png'),
    name: 'Kadhi',
  },
  {
    id: 2,
    image: require('../assets/kadhi.png'),
    name: 'Kadhi',
  },
];

const listing_cook = [
  {
    id: 1,
    image: require('../assets/cook1.jpg'),
    name: 'Sardar',
  },
  {
    id: 2,
    image: require('../assets/cook1.jpg'),
    name: 'Sardar',
  },
];

let data = null;
let data2 = null;

export default class Searchpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookdata: null,
      dishdata: null,
      query: '',
    };
  }

  handleSearch = (text) => {
    const formatedQuery = text.toLowerCase();
    data = null;
    data2 = null;
    if (text === '') {
      this.setState({query: formatedQuery, cookdata: data, dishdata: data2});
    } else {
      data = _.filter(listing_cook, (user) => {
        return user.name.toLowerCase().includes(formatedQuery);
      });
      if (!(data.length > 0)) {
        data = null;
      }

      data2 = _.filter(listing_dish, (user) => {
        return user.name.toLowerCase().includes(formatedQuery);
      });
      if (!(data2.length > 0)) {
        data2 = null;
      }
      this.setState({query: formatedQuery, cookdata: data, dishdata: data2});
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 0.4,
              borderColor: '#000',
              borderRadius: 50,
              padding: 5,
              width: '95%',
              alignItems: 'center',
              margin: 10,
              marginBottom: 20,
            }}>
            <Image
              source={require('../assets/search.png')}
              style={{marginLeft: 10, marginRight: 2}}
            />
            <TextInput
              placeholder="Search any dish or homecook"
              style={{flex: 1, height: 40}}
              onChangeText={this.handleSearch}></TextInput>
          </View>

          {this.state.dishdata !== null && (
            <Text
              style={{
                color: '#000000',
                fontWeight: 'bold',
                left: '2%',
              }}>
              Dishes & Cusines
            </Text>
          )}

          <FlatList
            data={this.state.dishdata}
            keyExtractor={(dishdata) => dishdata.id.toString()}
            renderItem={({item}) => (
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate('Searchresult')}>
                <Searchdish image={item.image} name={item.name} />
              </TouchableWithoutFeedback>
            )}
          />

          {this.state.cookdata !== null && (
            <Text
              style={{
                color: '#000000',
                fontWeight: 'bold',
                left: '2%',
                paddingTop: 10,
                borderTopWidth: 0.5,
              }}>
              Home Cooks
            </Text>
          )}

          <FlatList
            data={this.state.cookdata}
            keyExtractor={(cookdata) => cookdata.id.toString()}
            renderItem={({item}) => (
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate('Profile')}>
                <Searchcook image={item.image} name={item.name} />
              </TouchableWithoutFeedback>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
    overflow: 'hidden',
    alignContent: 'center',
    marginHorizontal: 10,
  },
});
