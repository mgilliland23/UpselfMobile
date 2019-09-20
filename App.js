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
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
//import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EnIcon from 'react-native-vector-icons/Entypo';

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
        tabBarIcon: <EnIcon name="menu" size={22} color="#fff" />,
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
        tabBarIcon: <EnIcon name="chat" size={22} color="#fff" />,
      },
    },
    CalmCloud: {
      screen: CalmCloud,

      navigationOptions: {
        tabBarLabel: 'Calm Cloud',
        tabBarColor: '#000',
        activeColor: '#fff',
        tabBarIcon: <EnIcon name="cloud" size={22} color="#fff" />,
      },
    },
    Memory: {
      screen: Memory,

      navigationOptions: {
        tabBarLabel: 'Arcade',
        tabBarColor: '#6bccf3',
        activeColor: '#fff',
        tabBarIcon: <Icon name="brain" size={22} color="#fff" />,
      },
    },

    // Compliment: {
    //   screen: Compliment,
    // },
    // Splash: {
    //   screen: Splash,
    //   navigationOptions: {
    //     tabBarVisible: false,
    //     tabBarColor: '#6bccf3',
    //     activeColor: '#6bccf3',
    //   },
    // },
  },
  {
    //Render the splash screen on app load, which redirects to menu after 2 seconds
    initialRouteName: 'Menu',
    paths: [Menu, Chat, CalmCloud, Memory],

    // barStyle: {backgroundColor: '#6bccf3'},
  },
);

const App = createAppContainer(MainNavigator);

export default App;
