import React, {Component, useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    marginTop: 10,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default class DassResponse extends Component {
  render() {
    console.info(this.props);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.buttons, {backgroundColor: 'blue'}]}
          onPress={() => this.props.handleResponse(0)}>
          <Text style={{color: 'white'}}>Does not apply to me at all</Text>
          {/* <Button title="Does not apply to me at all" /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, {backgroundColor: 'green'}]}
          onPress={() => this.props.handleResponse(1)}>
          <Text style={{color: 'white'}}>Applies to me sometimes</Text>
          {/* <Button title="Does not apply to me at all" /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, {backgroundColor: 'yellow'}]}
          onPress={() => this.props.handleResponse(2)}>
          <Text style={{color: 'white'}}>
            Applies to me good amount of times
          </Text>
          {/* <Button title="Does not apply to me at all" /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, {backgroundColor: 'pink'}]}
          onPress={() => this.props.handleResponse(3)}>
          <Text style={{color: 'white'}}>Applies to me most of the time</Text>
          {/* <Button title="Does not apply to me at all" /> */}
        </TouchableOpacity>
        {/* <Button
          title="Applies to me sometimes"
          value={1}
          onPress={() => this.props.handleResponse(1)}
        /> */}
        {/* <Button
          title="Applies to me good amount of times"
          value={2}
          onPress={() => this.props.handleResponse(2)}
        /> */}
        {/* <Button
          title="Applies to me most of the time"
          value={3}
          onPress={() => this.props.handleResponse(3)}
        /> */}
      </View>
    );
  }
}
