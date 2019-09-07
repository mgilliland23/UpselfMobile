/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import Landing from './components/Landing';
import IntroChat from './components/IntroChat';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return <Landing />;
  }
}

const MainNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing,
    },
    //Landing: Landing,
    IntroChat: {
      screen: IntroChat,
    },
  },
  {
    initialRouteName: 'Landing',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
