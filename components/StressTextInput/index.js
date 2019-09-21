import React, {Component} from 'react';
import {View, TextInput, Keyboard, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
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

function InputBox(props) {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      returnKeyType="done"
      autoFocus="true"
      style={styles.textInput}
      onSubmitEditing={Keyboard.dismiss}
    />
  );
}

export default function StressTextInput() {
  const [value, onChangeText] = React.useState('');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View style={styles.inputBox}>
      <InputBox
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}
