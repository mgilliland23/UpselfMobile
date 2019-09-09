import React, {Component} from 'react';
import StressTextInput from '../StressTextInput';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: win.width,
    backgroundColor: '#f2f2f2',
  },
  padding: {
    flex: 1,
    paddingHorizontal: 24,
  },
  circle: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 175,
  },
  getStartedText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 0,
    marginTop: 50,
  },
  stressBall: {
    position: 'absolute',
    paddingHorizontal: 30,
    top: 200,
    width: '100%',
    justifyContent: 'center',
  },
});

export default class Landing extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#6bccf3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }
  handleAnimation = () => {
    // A loop is needed for continuous animation
    Animated.loop(
      // Animation consists of a sequence of steps
      Animated.sequence([
        // start rotation in one direction (only half the time is needed)
        Animated.timing(this.animatedValue, {
          toValue: 1.0,
          duration: 150,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        // rotate in other direction, to minimum value (= twice the duration of above)
        Animated.timing(this.animatedValue, {
          toValue: -1.0,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        // return to begin position
        Animated.timing(this.animatedValue, {
          toValue: 0.0,
          duration: 150,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.padding}>
          <Text style={styles.getStartedText}>
            {' '}
            Type in something that is causing you stress{' '}
          </Text>
          <ImageBackground
            style={styles.circle}
            source={require('../../assets/images/circle.png')}
            resizeMode={'contain'}>
            <View style={styles.stressBall}>
              <StressTextInput />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
