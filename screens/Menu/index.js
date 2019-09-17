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
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    marginTop: '90%',
    color: '#F46DCE',
    fontWeight: 'bold',
    justifyContent: 'center',
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
                resizeMode={'contain'}
              />
              <Text style={styles.menuChatText}>Chat Upsy</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#F46DCE30',
              marginBottom: 20,
            }}>
            <Swiper
              // loop = {false}
              showsPagination={true}
              showsButtons={true}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('')}>
                  <ImageBackground
                    style={styles.upsySwipe}
                    source={require('../../assets/images/upsy_emo/upsy1_emo8.png')}
                    resizeMode={'contain'}>
                    <Text style={styles.menuSwipeText}>Compliments</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('')}>
                  <ImageBackground
                    style={styles.upsySwipe}
                    source={require('../../assets/images/upsy_emo/upsy1_emo7.png')}
                    resizeMode={'contain'}>
                    <Text style={styles.menuSwipeText}>Stress Test</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('DeStress')}>
                  <ImageBackground
                    style={styles.upsySwipe}
                    source={require('../../assets/images/upsy_emo/upsy1_emo1.png')}
                    resizeMode={'contain'}>
                    <Text style={styles.menuSwipeText}>Calm Cloud</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Memory')}>
                  <ImageBackground
                    style={styles.upsySwipe}
                    source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
                    resizeMode={'contain'}>
                    <Text style={styles.menuSwipeText}>Arcade</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      'https://upself-web.herokuapp.com/swag.html',
                    );
                  }}>
                  <ImageBackground
                    style={styles.upsySwipe}
                    source={require('../../assets/images/upsy_emo/upsy1_emo10.png')}
                    resizeMode={'contain'}>
                    <Text style={styles.menuSwipeText}>Upsy Swag</Text>
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
