/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import Landing from './screens/Landing';
import Chat from './screens/Chat';
import CalmCloud from './screens/CalmCloud';
import Menu from './screens/Menu';
import Memory from './screens/Memory';
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
    CalmCloud: {
      screen: CalmCloud,
    },
    Memory: {
      screen: Memory,
    },
    Menu: {
      screen: Menu,
    },
  },
  {
    //TODO: Check if this is the first time the user has used this app,
    //if so, initial route should be Landing, else initial route should be Home
    initialRouteName: 'Menu',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
