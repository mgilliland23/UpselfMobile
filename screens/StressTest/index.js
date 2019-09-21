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
    padding: 1,
  },
  logo: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
});

const dass_questions = [
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
    'I felt intolerant of anything that kept me from getting on with what I was doing',
    's',
  ],
  ['I felt I was close to panic', 'a'],
  ['I was unable to become enthusiastic about anything', 'd'],
  ['I felt I wasn’t worth much as a person', 'd'],
  ['I felt that I was rather touchy', 's'],
  ['I sensed my heart rate increase or miss a beat', 'a'],
  ['I felt scared without any good reason', 'a'],
  ['I felt that life was meaningless', 'd'],
];

export default class StressTest extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/stresstest/upsyDABss.png')}
            resizeMode={'contain'}
            width="95%"
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Answers</Text>
        </View>
      </View>
    );
  }
}
