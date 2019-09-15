/* eslint-disable react-native/no-inline-styles */
import React, {Component, Fragment} from 'react';
import {Animated} from 'react-native';

import Cloud from '../Cloud';

export default class FloatingClouds extends Component {
  //Prevent the component from re rendering when the state is updated in ClamCloud page
  //I.e. when the stressball is tapped, we don't want this componenet to re render
  constructor(props) {
    super(props);
    this.clouds = [];
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     //return false;
  //   }

  componentDidMount() {
    this.createClouds();
  }

  createClouds = () => {
    this.clouds.push(<Cloud />);
  };

  render() {
    return <Fragment>{this.clouds}</Fragment>;
  }
}
