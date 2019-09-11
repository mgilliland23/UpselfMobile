import React, { Component } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import Card from './Card';

//import "./Bounce_upsy.css";
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
import { tsParenthesizedType } from '@babel/types';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  click: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  container: {
    marginTop: 10,
    flex: 1,
  }
});

images = [
  require('../../assets/images/check/check1.png'),
  require('../../assets/images/check/check2.png'),
  require('../../assets/images/check/check3.png'),
  require('../../assets/images/check/check4.png'),
  require('../../assets/images/check/check5.png'),
  require('../../assets/images/check/check6.png'),
  require('../../assets/images/check/check1.png'),
  require('../../assets/images/check/check2.png'),
  require('../../assets/images/check/check3.png'),
  require('../../assets/images/check/check4.png'),
  require('../../assets/images/check/check5.png'),
  require('../../assets/images/check/check6.png'),
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


images=shuffle(images);

export default class Memory extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#6bccf3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };





  render() {
    return (

      <View style={styles.container}>

        <Grid >

          <Col>
            <Card imageUri={images[0]} />
            <Card imageUri={images[1]} />
            <Card imageUri={images[2]} />
            <Card imageUri={images[3]} />
          </Col>

          <Col>
            <Card imageUri={images[4]} />
            <Card imageUri={images[5]} />
            <Card imageUri={images[6]} />
            <Card imageUri={images[7]} />
          </Col>


          <Col>
            <Card imageUri={images[8]} />
            <Card imageUri={images[9]} />
            <Card imageUri={images[10]} />
            <Card imageUri={images[11]} />
          </Col>

        </Grid>


      </View >

    );
  }
}
