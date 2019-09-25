import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  buttons: {
    flex: 1,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    // borderWidth: 2,
    borderColor: '#fff',
  },
  responseText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default class DassResponse extends Component {
  render() {
    console.info(this.props.buttonCol[0]);
    return (
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttons, {backgroundColor: this.props.buttonCol}]}
            // style={[styles.buttons, {backgroundColor: '#6d8bf4'}]}
            onPress={() => this.props.handleResponse(0)}>
            <Text style={styles.responseText}>Does not apply to me at all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttons, {backgroundColor: this.props.buttonCol}]}
            // style={[styles.buttons, {backgroundColor: '#6d8bf4'}]}
            onPress={() => this.props.handleResponse(1)}>
            <Text style={styles.responseText}>Applies to me sometimes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttons, {backgroundColor: this.props.buttonCol}]}
            // style={[styles.buttons, {backgroundColor: '#6d8bf4'}]}
            onPress={() => this.props.handleResponse(2)}>
            <Text style={styles.responseText}>
              Applies to me a good amount of time
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttons, {backgroundColor: this.props.buttonCol}]}
            // style={[styles.buttons, {backgroundColor: '#6d8bf4'}]}
            onPress={() => this.props.handleResponse(3)}>
            <Text style={styles.responseText}>
              Applies to me most of the time
            </Text>
          </TouchableOpacity>
        </View>
        {/* { this.state.buttonClicked ? <View/> :  */}
        {/* } */}
      </View>
    );
  }
}
