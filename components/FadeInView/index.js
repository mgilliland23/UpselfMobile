import React, {Component, useState} from 'react';
import {Animated} from 'react-native';
//Create a view that animates it's children's opacity to give a fade in effect
export default function FadeInView(props) {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: props.duration,
    }).start();
  });

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
}
