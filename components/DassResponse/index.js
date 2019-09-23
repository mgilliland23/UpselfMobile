import React, {Component, useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  buttons: {
    flex: 1,
    marginTop: 10,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    // borderWidth: 2,
    borderColor: '#fff',
  },
  responseText: {
    color: 'white',
  },
});

export default class DassResponse extends Component {
  render() {
    console.info(this.props);
    return (
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttons, {backgroundColor: 'lightgreen'}]}
            onPress={() => this.props.handleResponse(0)}>
            <Text style={styles.responseText}>Does not apply to me at all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttons, {backgroundColor: '#6DCEF4'}]}
            onPress={() => this.props.handleResponse(1)}>
            <Text style={styles.responseText}>Applies to me sometimes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttons, {backgroundColor: 'yellow'}]}
            onPress={() => this.props.handleResponse(2)}>
            <Text style={styles.responseText}>
              Applies to me good amount of times
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttons, {backgroundColor: '#F46DCE'}]}
            onPress={() => this.props.handleResponse(3)}>
            <Text style={styles.responseText}>
              Applies to me most of the time
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Button
          title="Does not apply to me at all"
          value={0}
          onPress={() => this.props.handleResponse(0)}
        /> */}
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
