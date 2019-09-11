import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    color: 'white',
    alignSelf: 'center',
  },
  inputBox: {
    color: 'white',
    borderBottomWidth: 0,
    width: '80%',
    maxHeight: 120,
    borderColor: 'black',
    alignSelf: 'center',
  },
});

function UselessTextInput(props) {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      autoFocus="true"
      style={styles.textInput}
    />
  );
}

export default function StressTextInput() {
  const [value, onChangeText] = React.useState('');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View style={styles.inputBox}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}
