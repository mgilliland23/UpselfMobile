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
// import {Col, Row, Grid} from 'react-native-easy-grid';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: win.width,
    // height: win.height,
    padding: 1,
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
  upsyImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  getStartedText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  menuOptionLeftText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 40,
    marginRight: 56,
    marginLeft: 54,
    color: 'white',
    fontWeight: 'bold',
  },
  menuOptionRightText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 40,
    marginRight: 54,
    marginLeft: 56,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

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
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Chat')}>
              <ImageBackground
                style={[
                  styles.upsyImg,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: '85%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  },
                ]}
                source={require('../../assets/images/upsy_emo/upsy1_emo2.png')}
                resizeMode={'contain'}>
                <Text style={styles.menuOptionLeftText}>Chat Upsy</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('')}>
              <ImageBackground
                style={[
                  styles.upsyImg,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: '85%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  },
                ]}
                source={require('../../assets/images/upsy_emo/upsy1_emo8.png')}
                resizeMode={'contain'}>
                <Text style={styles.menuOptionRightText}>Compliments</Text>
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
              onPress={() => this.props.navigation.navigate('')}>
              <ImageBackground
                style={[
                  styles.upsyImg,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: '85%',
                    justifyContent: 'center',
                  },
                ]}
                source={require('../../assets/images/upsy_emo/upsy1_emo7.png')}
                resizeMode={'contain'}>
                <Text style={styles.menuOptionLeftText}>Stress Test</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DeStress')}>
              <ImageBackground
                style={[
                  styles.upsyImg,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: '85%',
                    justifyContent: 'center',
                  },
                ]}
                source={require('../../assets/images/upsy_emo/upsy1_emo1.png')}
                resizeMode={'contain'}>
                <Text style={styles.menuOptionRightText}>Calm Cloud</Text>
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
              onPress={() => this.props.navigation.navigate('Memory')}>
              <ImageBackground
                style={[
                  styles.upsyImg,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: '85%',
                    justifyContent: 'center',
                    marginLeft: '5%'
                  },
                ]}
                source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
                resizeMode={'contain'}>
                <Text style={styles.menuOptionLeftText}>Arcade</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Swag')}>
              <ImageBackground
                style={[
                  styles.upsyImg,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: '85%',
                    justifyContent: 'center',
                  },
                ]}
                source={require('../../assets/images/upsy_emo/upsy1_emo10.png')}
                resizeMode={'contain'}>
                <Text style={styles.menuOptionRightText}>Upsy Swag</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
