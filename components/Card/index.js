import React, { Component } from 'react';
import PropTypes from 'prop-types'
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

// let value = false;
var showingE = [null, false, false, false, false, false, false, false, false, false, false, false, false]; //state[0] is not considered
var move = [0, 0];
var moveid = [0, 0];
var click = 0;
var animate = true;


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function checkstatus(values) {
  if (click % 2 == 0) {
    if (move[0] == move[1] && move[0] != 0) {
      console.log("keep open");
      return true;
    }
    else {
      console.log("RESET!!!");
      cleantiles(moveid[0], moveid[1], values);
      return false;
    }
  }
  console.log("keep open");
  return true;
}

function checkwin(array) {
  for (var i = 1; i < array.length; i++) {
    if (array[i] == false) {
      return false
    }
  }

  return true;
}

function alertwin(array, value, images) {
  if (checkwin(array) == true) {
    if (click / 2 <= 10) {
      alert("YOU WIN! 🏆🥇 \n It took you " + click / 2 + " clicks. \n\nThat is a perfect score! 🙌👏👍");
    }
    else if (click / 2 <= 13) {
      alert("YOU WIN! 🥈 \n It took you " + click / 2 + " clicks. \n\nThat is great... but I know you can do better! \n\nYou can make it in 10 clicks 🤗");
    }
    else {
      alert("YOU WIN! 🥉 \n It took you " + click / 2 + " clicks. \n\nI know you can do it in 10 clicks! 🤗😊");
    }

    array = [null, false, false, false, false, false, false, false, false, false, false, false, false]; //state[0] is not considered
    value.action(array);
    value.reshuffle(shuffle(images));
    showingE = array;
    move = [0, 0];
    moveid = [0, 0];
    click = 0;
  }
}


function moveupdate(imageUri, id) {
  move.push(imageUri);//this.props.imageUri
  move.shift();
  moveid.push(id);//this.props.id
  moveid.shift();
}

function cleantiles(move0, move1, value) {
  animate = false;
  setTimeout(function () {
    showingE[move0] = false;
    showingE[move1] = false;
    value.action(showingE);
    animate = true;
  }, 2000);
}


export default class Card extends Component {

  // static navigationOptions = {
  //     headerStyle: {
  //         backgroundColor: '#6bccf3',
  //     },
  //     headerTintColor: '#fff',
  //     headerTitleStyle: {
  //         fontWeight: 'bold',
  //     },
  // };


  constructor(props) {
    super(props);
    this.state = {
      showing: false
    };
  }

  render() {

    return (
      <View style={styles.container}>
        {
          // Pass any View or Component inside the curly bracket.
          // Here the ? Question Mark represent the ternary operator.

          (this.props.showme == false) ? (
            // (state[this.props.imageUri] == false && showing[this.props.imageUri] == false) ? (
            <TouchableOpacity
              // onPress={() => this.setState({ isHidden: true })}
              // onPress={() => alert("test1")}
              onPress={() => [
                // this.setState({ showing: true }),
                (animate == true) ? (
                  click++ ,
                  showingE[this.props.id] = true,
                  this.props.action(showingE),
                  moveupdate(this.props.imageUri, this.props.id),
                  console.log(move),
                  console.log(moveid),
                  console.log(click),
                  checkstatus(this.props),
                  alertwin(showingE, this.props,this.props.rawdata)
                ) :
                  (
                    null
                  ),
              ]}

              style={styles.click} >
              <Image
                style={[styles.click]}
                source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          )
            :
            (
              <TouchableOpacity
                onPress={() => [null]}
                style={styles.click}>
                <Image
                  style={[styles.click]}
                  source={this.props.imageUri}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            )
        }

      </View>
    )


  }

}
