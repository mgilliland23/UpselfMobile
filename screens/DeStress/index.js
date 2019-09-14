import React, {Component, useState} from 'react';
import StressTextInput from '../../components/StressTextInput';
import FadeInView from '../../components/FadeInView';
import {
  View,
  Text,
  ImageBackground,
  Animated,
  Easing,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation,
  Keyboard,
} from 'react-native';

import styles from './style.js';

//Make the react ImageBackground component an animatable component
const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class DeStress extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#6bccf3',
    },
    title: 'Stress Cloud',
    headerTintColor: '#f2f2f2',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    //Prop to hold the animation value of the stressballs height and width
    this.stressBallScaleValue = new Animated.Value(1);
    //State used to hide text after the stressball is clicked
    this.causeTextOpacity = new Animated.Value(1);
    this.dissapearTextOpacity = new Animated.Value(0);
  }

  componentDidMount() {
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  _keyboardDidHide = () => {
    //Hide text 'what is causing stress...'
    // LayoutAnimation.spring();
    Animated.sequence([
      Animated.timing(this.causeTextOpacity, {
        toValue: 0,
        duration: 1500,
        easing: Easing.ease,
      }).start(),
      //Display text 'tap to dissapear....'
      Animated.timing(this.dissapearTextOpacity, {
        toValue: 1,
        duration: 4000,
        easing: Easing.ease,
      }).start(),
    ]);
  };

  handleStressBallAnimation = () => {
    //Start animation by decreasing the stressball's scale from 1 to 0 over the course of 40sec
    Animated.timing(this.stressBallScaleValue, {
      toValue: 0,
      duration: 40000,
      easing: Easing.ease,
    }).start();
    //Display text 'tap to dissapear....'
    Animated.timing(this.dissapearTextOpacity, {
      toValue: 0,
      duration: 3000,
      easing: Easing.ease,
    }).start();
  };

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.padding}>
          <FadeInView style={styles.topText} duration={4000}>
            <Animated.Text
              style={[styles.getStartedText, {opacity: this.causeTextOpacity}]}>
              {' '}
              Type in something that is causing you stress{' '}
            </Animated.Text>
          </FadeInView>

          <FadeInView style={styles.stressBallSection} duration={5000}>
            <TouchableOpacity onPress={() => this.handleStressBallAnimation()}>
              <AnimatedImage
                style={[
                  styles.stressBall,
                  {
                    transform: [
                      {
                        scaleX: this.stressBallScaleValue,
                      },
                      {
                        scaleY: this.stressBallScaleValue,
                      },
                    ],
                  },
                ]}
                source={require('../../assets/images/circle.png')}
                resizeMode={'contain'}>
                <StressTextInput />
              </AnimatedImage>
            </TouchableOpacity>
          </FadeInView>

          <FadeInView style={styles.bottomText} duration={5000}>
            <Animated.Text
              style={[
                styles.getStartedText,
                {opacity: this.dissapearTextOpacity},
              ]}>
              Now tap the circle and watch your stress dissapear
            </Animated.Text>
          </FadeInView>
        </View>
      </View>
    );
  }
}
