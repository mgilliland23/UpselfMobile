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
import {createStackNavigator} from 'react-navigation-stack';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
//import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EnIcon from 'react-native-vector-icons/Entypo';

//Disable the yellow warning boxes in the emulator
console.disableYellowBox = true;

//Set up routes and the navigator for the app
const BottomBarNavigator = createMaterialBottomTabNavigator(
  {
    // Landing: {
    //   screen: Landing,
    // },

    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarColor: '#6de5f4',
        activeColor: '#fff',
        inactiveColor: '#fff',
        tabBarIcon: <EnIcon name="chat" size={22} color="#fff" />,
      },
    },
    CalmCloud: {
      screen: CalmCloud,

      navigationOptions: {
        tabBarLabel: 'Calm Cloud',
        tabBarColor: '#6d8bf4',
        activeColor: '#fff',
        tabBarIcon: <EnIcon name="cloud" size={22} color="#fff" />,
      },
    },
    Memory: {
      screen: Memory,

      navigationOptions: {
        tabBarLabel: 'Arcade',
        tabBarColor: '#936df4',
        activeColor: '#fff',
        tabBarIcon: <Icon name="brain" size={22} color="#fff" />,
      },
    },
    Menu: {
      screen: Menu,
      title: 'Menu',
      navigationOptions: {
        tabBarLabel: 'Menu',
        tabBarColor: '#6bccf3',
        activeColor: '#fff',
        inactiveColor: '#fff',
        tabBarIcon: <EnIcon name="menu" size={22} color="#fff" />,
      },
    },

    // Compliment: {
    //   screen: Compliment,
    // },
  },
  {
    //Render the splash screen on app load, which redirects to menu after 2 seconds
    initialRouteName: 'Menu',
    resetOnBlur: true,
  },
);

//Wrap the bottom tab navigator in a stack navigator to get splash screen working
const MainNavigator = createStackNavigator(
  {
    BottomBarNavigator,
    Splash: {
      screen: Splash,
      navigationOptions: {
        tabBarVisible: false,
        tabBarColor: '#6bccf3',
        activeColor: '#6bccf3',
      },
    },
    StressTest: {
      screen: StressTest,
      navigationOptions: {
        tabBarVisible: false,
        tabBarColor: '#6bccf3',
        activeColor: '#6bccf3',
      },
    },
  },
  {headerMode: 'none', initialRouteName: 'StressTest'},
);

const App = createAppContainer(MainNavigator);

export default App;
