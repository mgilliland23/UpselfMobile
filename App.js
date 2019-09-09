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
import DeStress from './components/DeStress';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Disable the yellow warning boxes in the emulator
console.disableYellowBox = true;

//Set up routes and the navigator for the app
const MainNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing,
    },
    Chat: {
      screen: Chat,
    },
    DeStress: {
      screen: DeStress,
    },
  },
  {
    //TODO: Check if this is the first time the user has used this app,
    //if so, initial route should be Landing, else initial route should be Home
    initialRouteName: 'Landing',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
