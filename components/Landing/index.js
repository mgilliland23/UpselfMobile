import React, {Component} from 'react';
//import "./Bounce_upsy.css";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// import Logo from '../../assets/images/logo_upself.svg';
const win = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: win.width,
    //height: win.height,
    padding: 1,
    //alignSelf: 'flex-start',
    backgroundColor: '#f2f2f2',
  },
  logo: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    marginTop: 100,
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
    marginBottom: 50,
  },
  upsy: {
    flex: 1,
    width: '60%',
    alignSelf: 'center',
  },
  getStartedText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 100,
  },
});

export default class Landing extends Component {
  _onPressUpsy() {
    alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.background}>
        {/* <View style={styles.logoPadding}> */}

        {/* </View> */}
        <View style={styles.padding}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo_upself.png')}
            resizeMode={'contain'}
          />
          <Text style={styles.helloText}> Hey I'm Upsy! </Text>
          <Text style={styles.missionText}>
            {' '}
            I'm here to make your day better!{' '}
          </Text>
          <TouchableOpacity onPress={this._onPressUpsy} style={styles.upsy}>
            <Image
              style={styles.upsy}
              source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={styles.getStartedText}>
            {' '}
            Click on me to get started!{' '}
          </Text>
        </View>
      </View>
    );
  }
}
