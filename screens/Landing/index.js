import React, {Component} from 'react';
//import "./Bounce_upsy.css";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: win.width,
    //height: win.height,
    padding: 1,
    //alignSelf: 'flex-start',
    backgroundColor: '#f2f2f2',
  },
  logo: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    marginTop: 100,
  },
  padding: {
    flex: 1,
    paddingHorizontal: 24,
  },
  helloText: {
    textAlign: 'center',
    fontSize: 34,
  },
  missionText: {
    paddingTop: 6,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50,
  },
  upsy: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
  },
  upsyImg: {
    flex: 1,
    width: '70%',
    alignSelf: 'center',
  },
  getStartedText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 100,
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
  _onPressUpsy() {
    alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.background}>
        {/* <View style={styles.logoPadding}> */}

        {/* </View> */}
        <View style={styles.padding}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo_upself.png')}
            resizeMode={'contain'}
          />
          <Text style={styles.helloText}> Hey I'm Upsy! </Text>
          <Text style={styles.missionText}>
            {' '}
            I'm here to make your day better!{' '}
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Chat')}
            style={styles.upsy}>
            <Image
              style={styles.upsyImg}
              source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={styles.getStartedText}>
            {' '}
            Click on me to get started!{' '}
          </Text>
        </View>
      </View>
    );
  }
}
