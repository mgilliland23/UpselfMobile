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
  Modal,
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
  question: {fontSize: 20, textAlign: 'center'},
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
      questionAnswered: 0,
      buttonClicked: false,
      buttonCol: ['#6bccf3', '#936df4', '#6d8bf4', '#6de5f4'],
      showResultsModal: false,
    };
    this.handleResponse = this.handleResponse.bind(this);
  }

  // Reset States once results modal pops up
  resetStates() {
    setTimeout(() => {
      this.setState({
        questionIndex: 0,
        depressionCount: 0,
        anxietyCount: 0,
        stressCount: 0,
        buttonClicked: false,
      });
    }, 500);
  }

  // Button Colors
  // changeBtnCol() {
  //   var firstCol = this.buttonCol.shift();
  //   console.info(firstCol);
  //   this.buttonCol.push(firstCol);
  //   console.info(this.buttonCol);
  //   this.setState({
  //     buttonCol: this.buttonCol,
  //   });
  // }

  // Handle User Response
  handleResponse(dassValue) {
    console.info("I'm being clicked");
    this.setState(
      {
        questionAnswered: this.state.questionAnswered + 1,
      },
      () => {
        if (this.state.questionIndex < dassQuestions.length) {
          console.info('Click Number:' + this.state.questionAnswered);
          // Increment index of array
          this.setState({
            questionIndex: this.state.questionIndex + 1,
          });
          // Determine DAS and add to each counter
          switch (dassQuestions[this.state.questionIndex].das) {
            case 'd':
              this.setState(
                {
                  depressionCount: this.state.depressionCount + dassValue,
                },
                () => {
                  console.info(
                    'depressionCount: ' + this.state.depressionCount,
                  );
                  if (this.state.questionAnswered === dassQuestions.length) {
                    this.getResults();
                  }
                },
              );
              break;
            case 'a':
              this.setState(
                {
                  anxietyCount: this.state.anxietyCount + dassValue,
                },
                () => {
                  console.info('anxietyCount: ' + this.state.anxietyCount);
                  if (this.state.questionAnswered === dassQuestions.length) {
                    this.getResults();
                  }
                },
              );
              break;
            case 's':
              this.setState(
                {
                  stressCount: this.state.stressCount + dassValue,
                },
                () => {
                  console.info('stressCount: ' + this.state.stressCount);
                  if (this.state.questionAnswered === dassQuestions.length) {
                    this.getResults();
                  }
                },
              );
              break;
          }
          // Change button colors
          // this.changeBtnCol();
        } else {
          console.info('ELSE');
        }
      },
    );
  }

  // Calculate results
  getResults() {
    this.setState(
      {
        // If all questions are answered, double counts and get results
        depressionCount: this.state.depressionCount * 2,
        anxietyCount: this.state.anxietyCount * 2,
        stressCount: this.state.stressCount * 2,
      },
      () => {
        this.setState({
          showResultsModal: true,
        });
        console.info(
          'double results for depressionCount: ' + this.state.depressionCount,
        );
        console.info('double results for anxietyCount: ' + this.state.anxietyCount);
        console.info('double results for stressCount: ' + this.state.stressCount);
      },
    );
  }

  calculate = value => {
    if (value > 10) {
      return 'severe';
    } else {
      return 'mild';
    }
  };

  render() {
    // console.log(dassQuestions[this.state.questionIndex].question);
    console.log(Object.keys(dassQuestions).length);

    return (
      <View style={styles.background}>
        <Modal
          visible={this.state.showResultsModal}
          // animationType="slide"
          onRequestClose={() => console.info('this is a close req')}>
          <View
            style={{
              flex: 1,
              // justifyContent: 'space-around',
              // alignSelf: 'center',
              flexDirection: 'column',
            }}>
            <View style={{flex: 1, backgroundColor: 'lightblue'}}>
              <Text
                style={{
                  marginTop: 55,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                DAS Scores
              </Text>
            </View>
            <View style={{flex: 2, backgroundColor: 'pink'}}>
              <Text>D</Text>
              <Text>
                You are showing {this.calculate(this.state.depressionCount)}{' '}
                signs of Depression
              </Text>
              {this.calculate(this.state.depressionCount) === 'mild' && (
                <TouchableOpacity>
                  <Text>Button</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{flex: 2, backgroundColor: 'lightyellow'}}>
              <Text>A</Text>
              <Text>You are showing KEY signs of Anxiety</Text>
            </View>
            <View style={{flex: 2, backgroundColor: 'lightgreen'}}>
              <Text>S</Text>
              <Text>You are showing signs of Stress</Text>
            </View>
            <View style={{flex: 1, backgroundColor: 'white'}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    showResultsModal: false,
                  });
                }}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ImageBackground
              style={styles.logo}
              source={require('../../assets/images/stresstest/upsyDABss.png')}
              resizeMode={'contain'}
              width="95%">
              <View style={styles.questionContainer}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    paddingBottom: 5,
                    marginLeft: 50,
                    fontSize: 17,
                    width: 300,
                  }}>
                  How relevant is this statement?
                </Text>
                <Text style={styles.question}>
                  {dassQuestions[this.state.questionIndex]
                    ? dassQuestions[this.state.questionIndex].question
                    : null}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View />
        <View style={{flex: 1, justifyContent: 'center', marginBottom: '10%'}}>
          <View>
            <DassResponse
              buttonCol={this.state.buttonCol[0]}
              handleResponse={this.handleResponse}
            />
          </View>
        </View>
      </View>
    );
  }
}
