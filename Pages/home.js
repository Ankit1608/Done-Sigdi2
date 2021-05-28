import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  FlatList,
  ScrollView,
  Animated,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import Card from '../component/card';
import Chefcard from '../component/chefcard';
import Circlecard from '../component/circlecard';

const circlecardlist = [
  {
    id: 'northindian',
    profile: require('../assets/bhature.png'),
    text: 'North Indian',
  },
  {
    id: 'southindian',
    profile: require('../assets/idli.png'),
    text: 'South Indian',
  },
  {
    id: 'chinese',
    profile: require('../assets/chinese.png'),
    text: 'Chinese',
  },
  {
    id: 'northindian2',
    profile: require('../assets/bhature.png'),
    text: 'North Indian',
  },
  {
    id: 'southindian2',
    profile: require('../assets/idli.png'),
    text: 'South Indian',
  },
  {
    id: 'chinese2',
    profile: require('../assets/chinese.png'),
    text: 'Chinese',
  },
  {
    id: 'gujrati',
    profile: require('../assets/gujrati.png'),
    text: 'Gujrati',
  },
  {
    id: 'snacks',
    profile: require('../assets/snacks.png'),
    text: 'Snacks',
  },
  {
    id: 'dessert',
    profile: require('../assets/dessert.png'),
    text: 'Dessert',
  },
  {
    id: 'gujrati2',
    profile: require('../assets/gujrati.png'),
    text: 'Gujrati',
  },
  {
    id: 'snacks2',
    profile: require('../assets/snacks.png'),
    text: 'Snacks',
  },
  {
    id: 'dessert2',
    profile: require('../assets/dessert.png'),
    text: 'Dessert',
  },
];

const listing = [
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
];

function Home({navigation}) {
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
  const scrollIndicator = useRef(new Animated.Value(0)).current;
  var difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight,
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference * 21],
    extrapolate: 'clamp',
  });
  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : visibleScrollBarHeight;
  console.log(difference);
  return (
    <SafeAreaView style={styles.homecontainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.homeheader}>
          <Image
            style={styles.homelocationimage}
            source={require('../assets/location.png')}
          />

          <View style={styles.homeheadertextcontainer}>
            <Text style={styles.homeheaderhome}>HOME</Text>
            <Text style={styles.homeheaderaddress} numberOfLines={1}>
              Flat-102, Plot-53, Rishabh Residency, Kalyan Nagar Phase-3,
              Hyderabad.
            </Text>
          </View>
        </View>
        <View style={styles.homeheading}>
          <Text style={styles.homesubheadingtext}>
            What are you looking for?
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            onContentSizeChange={(width) => {
              setCompleteScrollBarHeight(width);
            }}
            onLayout={({
              nativeEvent: {
                layout: {width},
              },
            }) => {
              setVisibleScrollBarHeight(width);
            }}
            onScroll={({
              nativeEvent: {
                contentOffset: {x},
              },
            }) => {
              scrollIndicator.setValue(x);
            }}
            scrollEventThrottle={16}>
            <FlatList
              contentContainerStyle={{justifyContent: 'center'}}
              numColumns={circlecardlist.length / 2}
              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              data={circlecardlist}
              keyExtractor={(listing) => listing.id.toString()}
              renderItem={({item}) => (
                <Circlecard img={item.profile} txt={item.text}></Circlecard>
              )}></FlatList>
          </ScrollView>

          <View
            style={{
              height: 6,
              width: '50%',
              backgroundColor: 'gray',
              borderRadius: 8,
              alignSelf: 'center',
            }}>
            <Animated.View
              style={{
                height: 6,
                borderRadius: 8,
                backgroundColor: '#fccf08',
                width: scrollIndicatorSize,
                transform: [{translateX: scrollIndicatorPosition}],
              }}
            />
          </View>
        </View>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.homeheading}>
              <Text style={styles.homesubheadingtext}>Top chefs near you</Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              data={listing}
              keyExtractor={(listing) => listing.id.toString()}
              renderItem={({item}) => (
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('Profile')}>
                  <Chefcard
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    profile={item.profile}
                    rating={item.rating}></Chefcard>
                </TouchableWithoutFeedback>
              )}></FlatList>
            <View style={styles.homeheading}>
              <Text style={styles.homesubheadingtext}>Quick Links</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Image
                style={{
                  height: 90,
                  width: 110,
                  borderRadius: 10,
                }}
                source={require('../assets/Pureveg.png')}
              />
              <Image
                style={{
                  height: 90,
                  width: 110,
                  borderRadius: 10,
                }}
                source={require('../assets/Trending.png')}
              />
              <Image
                style={{
                  height: 90,
                  width: 110,
                  borderRadius: 10,
                }}
                source={require('../assets/Newarraivals.png')}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Image
                style={{
                  height: 90,
                  width: 110,
                  borderRadius: 10,
                }}
                source={require('../assets/Nonveg.png')}
              />
              <Image
                style={{
                  height: 90,
                  width: 110,
                  borderRadius: 10,
                }}
                source={require('../assets/Offers.png')}
              />
              <Image
                style={{
                  height: 90,
                  width: 110,
                  borderRadius: 10,
                }}
                source={require('../assets/Premium.png')}
              />
            </View>
            <View style={styles.homeheading}>
              <Text style={styles.homesubheadingtext}>Explore Near You</Text>
            </View>
            <FlatList
              data={listing}
              keyExtractor={(listing) => listing.id.toString()}
              renderItem={({item}) => (
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('Profile')}>
                  <Card
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    profile={item.profile}
                    mark={item.mark}
                    price={item.price}
                    rating={item.rating}></Card>
                </TouchableWithoutFeedback>
              )}></FlatList>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Home;
const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    alignContent: 'center',
    paddingHorizontal: 10,
  },
  homeheader: {
    flexDirection: 'row',
    borderBottomColor: '#A9A69E',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  homelocationimage: {
    width: 22,
    marginRight: 15,
    marginTop: 10,
    resizeMode: 'contain',
  },
  homeheadertextcontainer: {
    marginTop: 17,
  },
  homeheaderaddress: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeheaderaddress: {
    width: '60%',
    color: '#404040',
  },
  homesubheadingtext: {
    fontSize: 16,
    paddingBottom: 1,
  },
  homeheading: {
    marginTop: 25,
    marginBottom: 20,
    width: 200,
    borderBottomWidth: 0.5,
  },
  scrollContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  petItemListContainer: {
    width: '100%',
  },
  customScrollBar: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    width: 6,
  },
  customScrollBarBackground: {
    backgroundColor: '#232323',
    borderRadius: 3,
    height: '100%',
    width: 6,
  },
});
