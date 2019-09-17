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
} from 'react-native';
import Swiper from 'react-native-swiper';
// import {Col, Row, Grid} from 'react-native-easy-grid';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: win.width,
    padding: 1,
    backgroundColor: '#f2f2f2',
  },
  logo: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    marginTop: 0,
  },
  upsyImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  upsySwipe: {
    width: 150,
    height: 150,
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
    marginTop: 45,
    marginRight: 55,
    marginLeft: 55,
    color: 'white',
    fontWeight: 'bold',
  },
  menuOptionRightText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 45,
    marginRight: 55,
    marginLeft: 55,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default class Menu extends Component {
  constructor(props) {
    super(props);
    // this.animatedValue = new Animated.Value(0);
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
            flex: 2,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
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
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#F46DCE30',
              marginBottom: 50,
            }}>
            <Swiper
              // loop = {false}
              showsPagination={true}
              showsButton={true}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('')}>
                  <ImageBackground
                    style={styles.upsySwipe}
                    source={require('../../assets/images/upsy_emo/upsy1_emo8.png')}
                    resizeMode={'contain'}>
                    <Text style={styles.menuOptionRightText}>Compliments</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('')}>
                  <ImageBackground
                    style={styles.upsySwipe}
                    source={require('../../assets/images/upsy_emo/upsy1_emo7.png')}
                    resizeMode={'contain'}>
                    <Text style={styles.menuOptionLeftText}>Stress Test</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', flex: 1}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('DeStress')}>
                  <ImageBackground
                    style={styles.upsySwipe}
                    source={require('../../assets/images/upsy_emo/upsy1_emo1.png')}
                    resizeMode={'contain'}>
                    <Text style={styles.menuOptionRightText}>Calm Cloud</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Memory')}>
                  <ImageBackground
                    style={styles.upsySwipe}
                    source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
                    resizeMode={'contain'}>
                    <Text style={styles.menuOptionLeftText}>Arcade</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL('https://upself-web.herokuapp.com/swag.html');
                  }}>
                  <ImageBackground
                    style={styles.upsySwipe}
                    source={require('../../assets/images/upsy_emo/upsy1_emo10.png')}
                    resizeMode={'contain'}>
                    <Text style={styles.menuOptionRightText}>Upsy Swag</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </Swiper>
          </View>
        </View>
      </View>
    );
  }
}
