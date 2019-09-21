import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';

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
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'yellow',
  },
  question: {
    flex: 1,
    width: '100%',
    marginTop: '30%',
    marginLeft: '10%',
    marginRight: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default class StressTest extends Component {
  // DASS21 Qs
  dass_questions = [
    ['I found it hard to wind down', 's'],
    ['I was aware of dryness of my mouth', 'a'],
    ['I couldn’t seem to experience any positive feeling at all', 'd'],
    [
      'I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)',
      'a',
    ],
    ['I found it difficult to work up the initiative to do things', 'd'],
    ['I tended to over-react to situations', 's'],
    ['I experienced trembling', 'a'],
    ['I felt that I was using a lot of nervous energy', 's'],
    ['I was worried about situations in which I might panic', 'a'],
    ['I felt that I had nothing to look forward to', 'd'],
    ['I found myself getting agitated', 's'],
    ['I found it difficult to relax', 's'],
    ['I felt down-hearted and blue', 'd'],
    [
      'I was intolerant of anything that kept me from getting on with what I was doing',
      's',
    ],
    ['I felt I was close to panic', 'a'],
    ['I was unable to become enthusiastic about anything', 'd'],
    ['I felt I wasn’t worth much as a person', 'd'],
    ['I felt that I was rather touchy', 's'],
    ['I sensed my heart rate increase or miss a beat', 'a'],
    ['I felt scared without any good reason', 'a'],
    ['I felt that life was meaningless', 'd'],
    ,
  ];

  // Initialize vars
  questionCount = 0;
  depressionCount = 0;
  anxietyCount = 0;
  stressCount = 0;

  // Set State
  state = {};

  render() {
    return (
      <View style={styles.background}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ImageBackground
              style={styles.logo}
              source={require('../../assets/images/stresstest/upsyDABss.png')}
              resizeMode={'contain'}
              width="95%">
              <Text style={styles.question}>{this.dass_questions[14][0]}</Text>
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
