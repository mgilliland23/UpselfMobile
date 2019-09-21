import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  ImageBackground,
  Linking,
  Easing,
} from 'react-native';
import Swiper from 'react-native-swiper';
// import {Col, Row, Grid} from 'react-native-easy-grid';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: win.width,
    padding: 1,
    // backgroundColor: '#f2f2f2',
    // backgroundColor: '#cef46d',
  },
  logo: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    marginTop: '20%',
    marginBottom: -60,
  },
  upsyImg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  menuChatText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: -10,
    marginRight: 55,
    marginLeft: 55,
    color: '#F46DCE',
    fontWeight: 'bold',
  },
  menuSwipeText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#F46DCE',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

// var counterInterval = 4;

export default class Menu extends Component {
  // state = {
  //   color: ['rgba(255,72,196,0.8)', 'rgba(43,209,252,0.8)'],
  //   colors: [
  //     ['rgba(255,72,196,0.8)', 'rgba(43,209,252,0.8)'],
  //     ['rgba(43,209,252,0.8)', 'rgba(243,234,95,0.8)'],
  //     ['rgba(243,234,95,0.8)', 'rgba(192,77,249,0.8)'],
  //     ['rgba(192,77,249,0.8)', 'rgba(255,72,196,0.8)'],
  //   ],
  //   // nextIndex: 0,
  // };

  // componentWillMount() {
  //   this.animatedValue = new Animated.Value(0);
  // }

  // animateColor() {
  //   Animated.timing(this.animatedValue, {
  //     toValue: 500,
  //     duration: 3000,
  //     // easing: Easing.linear,
  //   }).start();
  // }

  // componentDidMount() {
  //   // this.animateColor();

  //   setInterval(() => {
  //     // console.log("set interval");
  //     // console.log(this.state.colors.length);
  //     // this.setState({color: this.state.colors[counterInterval]});
  //     this.setState({color: this.state.colors[counterInterval % 4]});
  //     counterInterval++;
  //   }, 1000);
  // }

  static navigationOptions = {
    header: null,
  };

  render() {
    // const interpolateColor = this.animatedValue.interpolate({
    //   inputRange: [0, 300],
    //   outputRange: this.state.color,
    // });
    // const animatedStyle = {
    //   backgroundColor: interpolateColor,
    // };
    return (
      // <Animated.View style={[styles.background, animatedStyle]}>
      <Animated.View style={styles.background}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/menu_icons/logo_upself_text.png')}
          resizeMode={'contain'}
        />
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 10,
          }}>
          <Swiper
            // loop = {false}
            showsPagination={true}
            showsButtons={true}>
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                // backgroundColor: '#F46DCE30',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Chat')}>
                  <ImageBackground
                    style={styles.upsyImg}
                    source={require('../../assets/images/menu_icons/chat.png')}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.menuSwipeText}>Chat</Text>
                <Text style={styles.getStartedText}>Talk it out with Upsy!</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                // backgroundColor: '#6DCEF430',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('')}>
                  <Image
                    style={styles.upsyImg}
                    source={require('../../assets/images/menu_icons/compliments.png')}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.menuSwipeText}>Compliments</Text>
                <Text style={styles.getStartedText}>You deserve beautiful words!</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                // backgroundColor: '#F46DCE30',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('CalmCloud')}>
                  <Image
                    style={styles.upsyImg}
                    source={require('../../assets/images/menu_icons/calmcloud.png')}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.menuSwipeText}>Calm Cloud</Text>
                <Text style={styles.getStartedText}>You're bigger than your problems!</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                // backgroundColor: '#6DCEF430',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Memory')}>
                  <Image
                    style={styles.upsyImg}
                    source={require('../../assets/images/menu_icons/arcade.png')}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.menuSwipeText}>Arcade</Text>
                <Text style={styles.getStartedText}>Let's play!</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                // backgroundColor: '#F46DCE30',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('StressTest')}>
                  <Image
                    style={styles.upsyImg}
                    source={require('../../assets/images/menu_icons/stresstest.png')}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.menuSwipeText}>Stress Test</Text>
                <Text style={styles.getStartedText}>How stressed are you?</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                // backgroundColor: '#6DCEF430',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      'https://upself-web.herokuapp.com/swag.html',
                    );
                  }}>
                  <Image
                    style={styles.upsyImg}
                    source={require('../../assets/images/menu_icons/swag.png')}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.menuSwipeText}>Swag Shop</Text>
                <Text style={styles.getStartedText}>Deck out in Upsy Gear!</Text>
              </View>
            </View>
          </Swiper>
        </View>
      </Animated.View>
    );
  }
}
