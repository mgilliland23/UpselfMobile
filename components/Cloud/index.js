/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Animated, Easing, Dimensions, StyleSheet} from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  clouds: {
    width: 120,
    position: 'absolute',
    bottom: -200,
  },
});

const cloudsArr = [
  require('../../assets/images/clouds/cloud1.png'),
  require('../../assets/images/clouds/cloud2.png'),
  require('../../assets/images/clouds/cloud3.png'),
  require('../../assets/images/clouds/cloud4.png'),
  require('../../assets/images/clouds/cloud5.png'),
];

export default class Cloud extends Component {
  constructor(props) {
    super(props);
    this.cloudPosition = new Animated.Value(0);
  }

  componentDidMount() {
    this.animateCloud();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  animateCloud = () => {
    //Fade the next instruction text back in,
    Animated.timing(this.cloudPosition, {
      toValue: 1,
      duration: 17000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  render() {
    // const path = require(this.props.source);
    // console.log(path);
    var randomCloud = Math.floor(Math.random() * 5);
    return (
      <Animated.Image
        style={[
          styles.clouds,
          {left: this.props.xPosition},
          {
            transform: [
              {
                translateY: this.cloudPosition.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, win.height * -1 - 150],
                }),
              },
            ],
          },
        ]}
        source={cloudsArr[randomCloud]}
        resizeMode="contain"
        key={this.props.id}
      />
    );
  }
}
