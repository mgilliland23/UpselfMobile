import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
  ImageBackground,
} from 'react-native';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: win.width,
    // height: win.height,
    padding: 1,
    //alignSelf: 'flex-start',
    backgroundColor: '#f2f2f2',
  },
  logo: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    marginTop: 0,
  },
  padding: {
    flex: 1,
    paddingHorizontal: 24,
  },
  helloText: {
    textAlign: 'center',
    fontSize: 34,
  },
  missionText: {
    paddingTop: 6,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  upsy1: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
  },
  upsy2: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
  },
  upsy3: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
  },
  upsy4: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
  },
  upsy5: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
  },
  upsyImg: {
    // flex: 1,
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  getStartedText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  menuOptionText: {
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 100,
  },
});

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  handleAnimation = () => {
    // A loop is needed for continuous animation
    Animated.loop(
      // Animation consists of a sequence of steps
      Animated.sequence([
        // start rotation in one direction (only half the time is needed)
        Animated.timing(this.animatedValue, {
          toValue: 1.0,
          duration: 150,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        // rotate in other direction, to minimum value (= twice the duration of above)
        Animated.timing(this.animatedValue, {
          toValue: -1.0,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        // return to begin position
        Animated.timing(this.animatedValue, {
          toValue: 0.0,
          duration: 150,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  _onPressUpsy() {
    alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.background}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo_upself.png')}
          resizeMode={'contain'}
        />
        <Text style={styles.getStartedText}>
          {' '}
          Click on an Upsy of your choice!
        </Text>
        <View
          style={{
            display: 'flex',
            flex: 4,
            backgroundColor: 'pink',
          }}>
          <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Chat')}>
              {/* style={styles.upsy1} */}
              <ImageBackground
                style={[
                  styles.upsyImg,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'pink',
                    width: '100%',
                    height: '80%',
                    justifyContent: 'center',
                    paddingLeft: 100,
                  },
                ]}
                source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
                resizeMode={'contain'}>
                <Text>Chat with Upsy</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('')}>
              {/* style={styles.upsy4}> */}
              <ImageBackground
                style={[
                  styles.upsyImg,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'pink',
                    width: '100%',
                    height: '80%',
                    justifyContent: 'center',
                    paddingRight: 100,
                  },
                ]}
                source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
                resizeMode={'contain'}>
                <Text>Encouragements</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DeStress')}>
              {/* style={styles.upsy2}> */}
              <ImageBackground
                style={[
                  styles.upsyImg,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'pink',
                    width: '100%',
                    height: '80%',
                    justifyContent: 'center',
                    paddingLeft: 100,
                  },
                ]}
                source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
                resizeMode={'contain'}>
                <Text>Stress Test</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('')}>
              {/* // style={styles.upsy3}> */}
              <ImageBackground
                style={[
                  styles.upsyImg,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'pink',
                    width: '100%',
                    height: '80%',
                    justifyContent: 'center',
                    paddingRight: 100,
                  },
                ]}
                source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
                resizeMode={'contain'}>
                <Text>Calm Cloud</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Menu')}>
              {/* style={styles.upsy5}> */}
              <ImageBackground
                style={[
                  styles.upsyImg,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'pink',
                    width: '100%',
                    height: '80%',
                    justifyContent: 'center',
                    paddingLeft: 100,
                  },
                ]}
                source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
                resizeMode={'contain'}>
                <Text>Games</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Menu')}>
              {/* style={styles.upsy5}> */}
              <ImageBackground
                style={[
                  styles.upsyImg,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'pink',
                    width: '100%',
                    height: '80%',
                    justifyContent: 'center',
                    paddingRight: 100,
                  },
                ]}
                source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
                resizeMode={'contain'}>
                <Text>Upsy Swag</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
