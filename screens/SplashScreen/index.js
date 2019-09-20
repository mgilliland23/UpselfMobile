// screens/SplashScreen.js
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
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
    marginBottom: 50,
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
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50,
  },
  upsy: {
    flex: 4,
    width: '80%',
    alignSelf: 'center',
    paddingBottom: 100,
  },
  upsyImg: {
    flex: 1,
    width: '70%',
    alignSelf: 'center',
    marginBottom: 200,
  },
  getStartedText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 100,
  },
});

const TWO_SECONDS = 2000;

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      // Components that are placed inside a React Navigation
      // navigator will receive the `navigation` prop.
      // It's main usage is to trigger navigation events.
      // Right here we're telling it to navigate to the route
      // with the name 'App'.
      this.props.navigation.navigate('Menu');
    }, TWO_SECONDS);
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

          <Image
            style={styles.upsyImg}
            source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
            resizeMode={'contain'}
          />
        </View>
      </View>
    );
  }
}
