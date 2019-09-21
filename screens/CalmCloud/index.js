import React, {Component} from 'react';
import StressTextInput from '../../components/StressTextInput';
import FadeInView from '../../components/FadeInView';
import FloatingClouds from '../../components/FloatingClouds';
import {
  View,
  ImageBackground,
  Animated,
  Easing,
  TouchableOpacity,
  NativeModules,
  Keyboard,
} from 'react-native';

import styles from './style.js';

//Make the react ImageBackground component an animatable component
const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class StressCloud extends Component {
  constructor(props) {
    super(props);
    //Prop to hold the animation value of the stressballs height and width
    this.stressBallScaleValue = new Animated.Value(1);
    this.causeTextOpacity = new Animated.Value(1);
    this.instructionsTextOpacity = new Animated.Value(0);
    this.instructionsArr = [
      'first instruction',
      'second instruction',
      'third instruciton',
      'fourth instruction',
      'fifth instruction',
    ];

    this.state = {
      text: 'Now tap the circle and watch your stress dissapear',
      instructionsPosition: 0,
      animationStarted: false,
    };
  }

  componentDidMount() {
    //Add event listener for when the user presses the 'done' button on the keyboard
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  //When the keyboard is collapsed, animate the top text fading out and the bottom instruction text fading in
  //TODO: make sure there is something in the text box first
  _keyboardDidHide = () => {
    //Fade out top text 'what is causing stress...'
    Animated.sequence([
      //Fade in instruction text: 'tap to make stress dissapear....'
      Animated.timing(this.instructionsTextOpacity, {
        toValue: 1,
        delay: 1500,
        duration: 2500,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(),
    ]);
  };

  //Fade instructions in and out while the stressball is shrinking
  animateInstructions = () => {
    Animated.sequence([
      Animated.timing(this.causeTextOpacity, {
        toValue: 0,
        duration: 1500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      //Fade the next instruction text back in,
      Animated.timing(this.instructionsTextOpacity, {
        toValue: 1,
        duration: 2000,
        delay: 1500,
        useNativeDriver: true,
      }),
      //Fade the instruction out
      Animated.timing(this.instructionsTextOpacity, {
        toValue: 0,
        delay: 2500,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      //Set the instruction text state to the next instruction in the array
      this.state.instructionsPosition = this.state.instructionsPosition + 1;
      this.setState({
        text: this.instructionsArr[this.state.instructionsPosition],
      });
      //recursive call to animateInstructions as long as there are more instructions to dislay
      if (this.state.instructionsPosition < 5) {
        this.animateInstructions();
      }
    });
  };

  handleStressBallAnimation = () => {
    //Set this state to start rendering the floating clouds
    this.setState({
      animationStarted: true,
    });
    //Animate ball shrinking by decreasing the stressball's scale from 1 to 0 over 40sec
    Animated.timing(this.stressBallScaleValue, {
      toValue: 0,
      duration: 50000,
      delay: 2000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    //Animate text fading out
    Animated.timing(this.instructionsTextOpacity, {
      toValue: 0,
      duration: 3500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      //After this instruction disappears, change the instruction text to the first instruction in the array
      this.setState({
        text: this.instructionsArr[this.state.instructionsPosition],
      });
      //Now animate the list of instructions
      this.animateInstructions();
    });
  };

  render() {
    const startAnim = this.state.animationStarted;
    let clouds;
    if (startAnim) {
      clouds = <FloatingClouds />;
    }

    return (
      <View style={styles.background}>
        {clouds}
        <View style={styles.padding}>
          <FadeInView style={styles.topText} duration={3000}>
            <Animated.Text
              style={[styles.getStartedText, {opacity: this.causeTextOpacity}]}>
              {' '}
              Tap the stressball to type in something that is causing you stress{' '}
            </Animated.Text>
          </FadeInView>

          <FadeInView style={styles.stressBallSection} duration={3500}>
            <TouchableOpacity
              onPress={() =>
                !this.state.animationStarted && this.handleStressBallAnimation()
              }>
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
                {
                  opacity: this.instructionsTextOpacity,
                },
              ]}>
              {this.state.text}
            </Animated.Text>
          </FadeInView>
        </View>
      </View>
    );
  }
}
