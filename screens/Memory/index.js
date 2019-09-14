import React, {Component} from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Card from '../../components/Card';

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
  },
});

let count = 0;

const imagesO = [
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

const images = shuffle(imagesO);

console.log(images);

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

  constructor(props) {
    super(props);
    this.state = {
      messageShown: [
        null,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      // data: {
      //   field1: false, field2: false, field3: false, field4: false, field5: false, field6: false, field7: false, field8: false, field9: false,
      //   field10: false, field11: false, field12: false
      // }
    };
    this.handler = this.handler.bind(this);
  }

  handler(data) {
    this.setState({
      messageShown: data,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <Card
              imageUri={images[0]}
              id={1}
              showme={this.state.messageShown[1]}
              action={this.handler}
            />
            <Card
              imageUri={images[1]}
              id={2}
              showme={this.state.messageShown[2]}
              action={this.handler}
            />
            <Card
              imageUri={images[2]}
              id={3}
              showme={this.state.messageShown[3]}
              action={this.handler}
            />
            <Card
              imageUri={images[3]}
              id={4}
              showme={this.state.messageShown[4]}
              action={this.handler}
            />
          </Col>

          <Col>
            <Card
              imageUri={images[4]}
              id={5}
              showme={this.state.messageShown[5]}
              action={this.handler}
            />
            <Card
              imageUri={images[5]}
              id={6}
              showme={this.state.messageShown[6]}
              action={this.handler}
            />
            <Card
              imageUri={images[6]}
              id={7}
              showme={this.state.messageShown[7]}
              action={this.handler}
            />
            <Card
              imageUri={images[7]}
              id={8}
              showme={this.state.messageShown[8]}
              action={this.handler}
            />
          </Col>

          <Col>
            <Card
              imageUri={images[8]}
              id={9}
              showme={this.state.messageShown[9]}
              action={this.handler}
            />
            <Card
              imageUri={images[9]}
              id={10}
              showme={this.state.messageShown[10]}
              action={this.handler}
            />
            <Card
              imageUri={images[10]}
              id={11}
              showme={this.state.messageShown[11]}
              action={this.handler}
            />
            <Card
              imageUri={images[11]}
              id={12}
              showme={this.state.messageShown[12]}
              action={this.handler}
            />
          </Col>
        </Grid>
      </View>
    );
  }
}
