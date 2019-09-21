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
import Compliment from './screens/ComplimentChat';
import Splash from './screens/SplashScreen';
import StressTest from './screens/StressTest';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import {createStackNavigator} from 'react-navigation-stack';

//Disable the yellow warning boxes in the emulator
console.disableYellowBox = true;

//Set up routes and the navigator for the app
const MainNavigator = createMaterialBottomTabNavigator(
  {
    // Landing: {
    //   screen: Landing,
    // },
    Menu: {
      screen: Menu,
      title: 'Menu',
      navigationOptions: {
        tabBarLabel: 'Menu',
        tabBarColor: '#6bccf3',
        activeColor: '#fff',
        inactiveColor: '#fff',
      },

      // tabBarIcon: () => { focused: boolean, horizontal: boolean, tintColor: string }
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarColor: '#f46dce',
        activeColor: '#fff',
        inactiveColor: '#fff',
      },
    },
    CalmCloud: {
      screen: CalmCloud,
      navigationOptions: {
        tabBarLabel: 'Cart',
        tabBarColor: '#000',
      },
    },
    Memory: {
      screen: Memory,
    },

    // Compliment: {
    //   screen: Compliment,
    // },
    // Splash: {
    //   screen: Splash,
    // },
    StressTest: {
      screen: StressTest,
    },
  },
  {
    //Render the splash screen on app load, which redirects to menu after 2 seconds
    initialRouteName: 'StressTest',

    // barStyle: {backgroundColor: '#6bccf3'},
  },
);

const App = createAppContainer(MainNavigator);

export default App;
