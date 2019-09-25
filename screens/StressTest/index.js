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
  upsyImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  question: {fontSize: 20, textAlign: 'center'},
});

export default class StressTest extends Component {
  static navigationOptions = {
    header: null,
  };

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
        console.info(
          'double results for anxietyCount: ' + this.state.anxietyCount,
        );
        console.info(
          'double results for stressCount: ' + this.state.stressCount,
        );
        // Reset all states // LOOK INTO THIS
        this.resetStates();
      },
    );
  }

  // Depression Count
  calculateDepressionTotal = value => {
    if (value <= 9) {
      return 'Normal';
    } else if (value >= 10 && value <= 13) {
      return 'Mild';
    } else if (value >= 14 && value <= 20) {
      return 'Moderate';
    } else if (value >= 21 && value <= 27) {
      return 'Severe';
    } else {
      return 'Extremely Severe';
    }
  };

  // Anxiety Count
  calculateAnxietyTotal = value => {
    if (value <= 7) {
      return 'Normal';
    } else if (value >= 8 && value <= 9) {
      return 'Mild';
    } else if (value >= 10 && value <= 14) {
      return 'Moderate';
    } else if (value >= 15 && value <= 19) {
      return 'Severe';
    } else {
      return 'Extremely Severe';
    }
  };

  // Stress Count
  calculateStressTotal = value => {
    if (value <= 14) {
      return 'Normal';
    } else if (value >= 15 && value <= 18) {
      return 'Mild';
    } else if (value >= 19 && value <= 25) {
      return 'Moderate';
    } else if (value >= 26 && value <= 33) {
      return 'Severe';
    } else {
      return 'Extremely Severe';
    }
  };

  // Direct to Upsy
  // renderButton = result => {
  //   switch (result) {
  //     case 'Normal':
  //       return null;
  //     case 'Mild':
  //       return null;
  //     case 'Moderate':
  //       return 'Upsy';
  //     case 'Severe':
  //       return 'Upsy';
  //     case 'Extremely Severe':
  //       return 'Upsy';
  //   }
  // };

  render() {
    // console.log(dassQuestions[this.state.questionIndex].question);
    console.log(Object.keys(dassQuestions).length);

    return (
      <View style={styles.background}>
        <Modal
          visible={this.state.showResultsModal}
          animationType="slide"
          onRequestClose={() => console.info('this is a close req')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  marginTop: 55,
                  textAlign: 'center',
                  fontSize: 30,
                }}>
                DAS RESULTS
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                // backgroundColor: 'pink',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 25,
                  fontWeight: 'bold',
                  marginTop: 20,
                }}>
                Depression Scale:
              </Text>
              <Text style={{textAlign: 'center', fontSize: 20}}>
                {this.calculateDepressionTotal(this.state.depressionCount)}
              </Text>
              {this.calculateDepressionTotal(this.state.depressionCount) ===
                'Severe' && (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Chat')}>
                  <Text style={{textAlign: 'center', marginTop: 10}}>
                    Want to share more with Upsy?
                  </Text>
                  <ImageBackground
                    style={styles.upsyImg}
                    source={require('../../assets/images/menu_icons/chat.png')}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              )}
              {this.calculateDepressionTotal(this.state.depressionCount) ===
                'Extremely Severe' && (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Chat')}>
                  <Text style={{textAlign: 'center'}}>
                    Want to share more with Upsy?
                  </Text>
                  <ImageBackground
                    style={styles.upsyImg}
                    source={require('../../assets/images/menu_icons/chat.png')}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View
              style={{
                flex: 2,
                // backgroundColor: 'lightyellow',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 25,
                  fontWeight: 'bold',
                  marginTop: 20,
                }}>
                Anxiety Scale:
              </Text>
              <Text style={{textAlign: 'center', fontSize: 20}}>
                {this.calculateAnxietyTotal(this.state.anxietyCount)}
              </Text>
              {this.calculateAnxietyTotal(this.state.anxietyCount) ===
                'Severe' && (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('CalmCloud')}>
                  <Text style={{textAlign: 'center', marginTop: 10}}>
                    Check out our CalmCloud
                  </Text>
                  <ImageBackground
                    style={styles.upsyImg}
                    source={require('../../assets/images/menu_icons/calmcloud.png')}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              )}
              {this.calculateAnxietyTotal(this.state.anxietyCount) ===
                'Extremely Severe' && (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('CalmCloud')}>
                  <Text style={{textAlign: 'center'}}>
                    Check out our CalmCloud
                  </Text>
                  <ImageBackground
                    style={styles.upsyImg}
                    source={require('../../assets/images/menu_icons/calmcloud.png')}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View
              style={{
                flex: 2,
                // backgroundColor: 'lightgreen',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 25,
                  fontWeight: 'bold',
                  marginTop: 20,
                }}>
                Stress Scale:
              </Text>
              <Text style={{textAlign: 'center', fontSize: 20}}>
                {this.calculateStressTotal(this.state.stressCount)}
              </Text>
              {this.calculateStressTotal(this.state.stressCount) ===
                'Normal' && (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Memory')}>
                  <Text style={{textAlign: 'center', marginTop: 10}}>
                    Enter the Arcade Room!
                  </Text>
                  <ImageBackground
                    style={styles.upsyImg}
                    source={require('../../assets/images/menu_icons/arcade.png')}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              )}
              {this.calculateStressTotal(this.state.stressCount) ===
                'Extremely Severe' && (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Memory')}>
                  <Text style={{textAlign: 'center'}}>
                    Enter the Arcade Room!
                  </Text>
                  <ImageBackground
                    style={styles.upsyImg}
                    source={require('../../assets/images/menu_icons/arcade.png')}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  marginLeft: 150,
                  marginRight: 150,
                }}
                onPress={() => {
                  this.setState({
                    showResultsModal: false,
                  });
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  OK
                </Text>
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
