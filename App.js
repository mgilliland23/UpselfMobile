/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import Landing from './components/Landing';
import Chat from './components/Chat';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

console.disableYellowBox = true;

const MainNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing,
    },
    //Landing: Landing,
    Chat: {
      screen: Chat,
    },
  },
  {
    initialRouteName: 'Landing',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
