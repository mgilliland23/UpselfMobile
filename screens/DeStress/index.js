import React, {Component} from 'react';
import StressTextInput from '../StressTextInput';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground as ImageBk,
  Dimensions,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

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
    top: 250,
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

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.padding}>
          <Text style={styles.getStartedText}>
            {' '}
            Type in something that is causing you stress{' '}
          </Text>
          <TouchableWithoutFeedback onPress={this.bounce}>
            <Animatable.Image
              style={styles.circle}
              source={require('../../assets/images/circle.png')}
              resizeMode={'contain'}
            />
          </TouchableWithoutFeedback>
          <View style={styles.stressBall}>
            <StressTextInput />
          </View>
        </View>
      </View>
    );
  }
}
