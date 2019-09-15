/* eslint-disable react-native/no-inline-styles */
import React, {Component, Fragment} from 'react';
import {Animated} from 'react-native';

import Cloud from '../Cloud';

export default class FloatingClouds extends Component {
  //Prevent the component from re rendering when the state is updated in ClamCloud page
  //I.e. when the stressball is tapped, we don't want this componenet to re render
  constructor(props) {
    super(props);
    this.state = {clouds: []};
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     //return false;
  //   }

  componentDidMount() {
    this.createClouds();
  }

  createClouds = () => {
    this.setState(prevState => ({
      clouds: [...prevState.clouds, <Cloud />],
    }));
    // setInterval(() => {

    // }, 1200);
  };

  render() {
    //this.createClouds();
    console.log('clouds: ', this.state.clouds);

    return <Fragment>{this.state.clouds.map(cloud => cloud)}</Fragment>;
  }
}
