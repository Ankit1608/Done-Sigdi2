import React, {Component} from 'react';
import {
  Animated,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class paymentPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: new Animated.Value(0),
      endValue: -20,
      renderedItems: this.props.content.slice(0, 2),
      counter: 1,
    };
  }
  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.startValue, {
          toValue: -10,
          duration: 500,
          delay: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.startValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      {iterations: 1000},
    ).start();
  }
  handleSeemore = () => {
    this.setState({
      renderedItems: this.props.content.slice(0, this.state.counter * 2 + 2),
      counter: this.state.counter + 1,
    });
  };

  render() {
    const walletshadowopacity = this.state.startValue.interpolate({
      inputRange: [-10, 0],
      outputRange: [0.2, 0.7],
    });
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {this.props.heading}
          </Text>
        </View>
        <View style={styles.backgroundImageContainer}>
          <Animated.View
            style={[
              styles.square,
              {
                transform: [
                  {
                    translateY: this.state.startValue,
                  },
                ],
              },
            ]}>
            <ImageBackground
              source={require('../assets/wallet.png')}
              style={styles.backgroundImage}>
              <Text style={styles.amount}>{this.props.amount}</Text>
            </ImageBackground>
          </Animated.View>

          <View style={[styles.walletshadow, {opacity: 0.3}]} />
        </View>
        <View style={styles.paymentDateContainer}>
          <View style={styles.paymentDate}>
            <Text style={{color: '#552E30'}}>Today {' >'}</Text>
          </View>
        </View>
        {this.state.renderedItems.map((data) => (
          <View style={styles.infoContainer}>
            <Image
              style={{height: 30, width: 30, resizeMode: 'contain'}}
              source={require('../assets/paymentlogo.png')}
            />
            <View>
              <Text
                style={{
                  paddingRight: 20,
                  paddingLeft: 10,
                  marginRight: 20,
                }}>
                {data}
              </Text>
            </View>
          </View>
        ))}
        {this.props.content.length > this.state.counter * 2 && (
          <TouchableOpacity onPress={this.handleSeemore}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text>see more {'>'}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default paymentPageComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  backgroundImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  backgroundImage: {
    height: 163,
    width: 155,
    resizeMode: 'cover',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  amount: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
  },
  paymentDateContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
    marginTop: 10,
  },
  paymentDate: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FCCF08',
    borderRadius: 5,
  },
  infoContainer: {
    padding: 15,
    flexDirection: 'row',
    borderWidth: 0.5,
  },
  walletshadow: {
    marginTop: 10,
    height: 2,
    width: 140,
    backgroundColor: '#000',

    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 0.5,
  },
});
