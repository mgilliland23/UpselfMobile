import React, {Component} from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({});

export default class DassResults extends Component {
  render() {
    return (
      <View>
        <Modal>
          <View>
            <Text>Here are your scores</Text>
          </View>
        </Modal>
      </View>
    );
  }
}
