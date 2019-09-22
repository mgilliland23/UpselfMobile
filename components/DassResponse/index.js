import React, {Component, useState} from 'react';
import {View, Button} from 'react-native';

export default class DassResponse extends Component {
  render() {
    console.info(this.props);
    return (
      <View>
        <Button
          title="Does not apply to me at all"
          value={0}
          onPress={() => this.props.handleResponse(0)}
        />
        <Button
          title="Applies to me sometimes"
          value={1}
          onPress={() => this.props.handleResponse(1)}
        />
        <Button
          title="Applies to me good amount of times"
          value={2}
          onPress={() => this.props.handleResponse(2)}
        />
        <Button
          title="Applies to me most of the time"
          value={3}
          onPress={() => this.props.handleResponse(3)}
        />
      </View>
    );
  }
}
