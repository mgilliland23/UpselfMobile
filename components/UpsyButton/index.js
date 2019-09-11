import React from 'react';

import {Text, Image, TouchableOpacity} from 'react-native';

export default function UpsyButton(props) {
  const {width} = props;

  const styles = {
    button: {
      flex: 1,
      width: width,
      alignSelf: 'center',
    },
  };

  return (
    <TouchableOpacity onPress={props.handlePress} style={styles.button}>
      <Image
        style={styles.upsyImg}
        source={require('../../assets/images/upsy_emo/upsy1_emo3.png')}
        resizeMode={'contain'}
      />
      <Text>Chat with Upsy</Text>
    </TouchableOpacity>
  );
}
