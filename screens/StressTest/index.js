import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import dassQuestions from './questions';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: win.width,
    // padding: 1,
  },
  logo: {
    flex: 1,
    width: '97%',
    height: '100%',
    marginLeft: '3%',
    justifyContent: 'center',
    alignSelf: 'center',
    // backgroundColor: 'yellow',
  },
  question: {
    flex: 1,
    width: '100%',
    marginTop: '30%',
    marginLeft: '15%',
    marginRight: '15%',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default class StressTest extends Component {
  // Set State

  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      depressionCount: 0,
      anxietyCount: 0,
      stressCount: 0,
    };
    this.myFunction = this.myFunction.bind(this);
  }

  // handleDasValue
  myFunction() {
    console.info("I'm being clicked");
    console.info('Before state: ' + this.state.questionIndex);
    this.setState({
      questionIndex: this.state.questionIndex + 1,
    });
  }

  render() {
    console.log(dassQuestions[this.state.questionIndex].question);
    console.log(Object.keys(dassQuestions).length);

    return (
      <View style={styles.background}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ImageBackground
              style={styles.logo}
              source={require('../../assets/images/stresstest/upsyDABss.png')}
              resizeMode={'contain'}
              width="95%">
              <Text style={styles.question}>
                {dassQuestions[this.state.questionIndex].question}
              </Text>
              <Button title="myButton" onPress={this.myFunction}>
                {dassQuestions[this.state.questionIndex].question}
              </Button>
            </ImageBackground>
          </View>
        </View>
        <View />

        <View
          style={{flex: 1, justifyContent: 'center', backgroundColor: 'green'}}>
          <View>
            <Text>Your Answers</Text>
          </View>
          <View>
            <Text>Answers</Text>
          </View>
        </View>
      </View>
    );
  }
}
