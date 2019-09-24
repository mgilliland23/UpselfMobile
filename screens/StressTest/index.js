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
import DassResponse from '../../components/DassResponse';
import DassResults from '../../components/DassResults';

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
  questionContainer: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    height: 250,
    width: 250,
    marginLeft: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  question: {fontSize: 20, textAlign: 'center'}
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
      buttonCol: ['#6bccf3', '#936df4', '#6d8bf4', '#6de5f4'],
      // showModal: false,
    };
    this.handleResponse = this.handleResponse.bind(this);
  }

  // Handle User Response
  handleResponse(dassValue) {
    console.info("I'm being clicked");
    console.info('Before state: ' + this.state.questionIndex);
    // Check for # of questions
    if (this.state.questionIndex < Object.keys(dassQuestions).length - 1) {
      this.setState({
        questionIndex: this.state.questionIndex + 1,
      });
      // Determine DAS and add to each counter
      switch (dassQuestions[this.state.questionIndex].das) {
        case 'd':
          this.setState({
            depressionCount: this.state.depressionCount + dassValue,
          });
          break;
        case 'a':
          this.setState({
            anxietyCount: this.state.anxietyCount + dassValue,
          });
          break;
        case 's':
          this.setState({
            stressCount: this.state.stressCount + dassValue,
          });
          break;
      }
      console.info('depressionCount: ' + this.state.depressionCount);
      console.info('anxietyCount: ' + this.state.anxietyCount);
      console.info('stressCount: ' + this.state.stressCount);

      // Change button colors
      this.changeBtnCol();
    } else {
      // If all questions are answered, double counts and get results
      this.setState({
        depressionCount: this.state.depressionCount * 2,
        anxietyCount: this.state.anxietyCount * 2,
        stressCount: this.state.stressCount * 2,
      });
      this.getResults();
    }
  }
  // Button Colors
  // changeBtnCol() {
  // }

  // Calculate results
  getResults() {
    console.info('double results for depressionCount: ' + this.state.depressionCount);
    console.info('double results for anxietyCount: ' + this.state.anxietyCount);
    console.info('double results for stressCount: ' + this.state.stressCount);
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
              <View style={styles.questionContainer}>
                <Text
                  style={{fontWeight: 'bold', paddingBottom: 5, marginLeft: 50, fontSize: 17, width: 300}}>
                  How relevant is this statement?
                </Text>
                <Text style={styles.question}>
                  {dassQuestions[this.state.questionIndex].question}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View />
        <View style={{flex: 1, justifyContent: 'center', marginBottom: '10%'}}>
          <View>
            <DassResponse buttonCol={this.state.buttonCol[0]} handleResponse={this.handleResponse} />
          </View>
        </View>
      </View>
    );
  }
}
