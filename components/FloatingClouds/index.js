/* eslint-disable react-native/no-inline-styles */
import React, {Component, Fragment} from 'react';
import {Animated, Dimensions} from 'react-native';

import Cloud from '../Cloud';

const win = Dimensions.get('window');

export default class FloatingClouds extends Component {
  //Prevent the component from re rendering when the state is updated in ClamCloud page
  //I.e. when the stressball is tapped, we don't want this componenet to re render
  constructor(props) {
    super(props);
    this.state = {cloudsArr: []};
  }

  componentDidMount() {
    console.log('create clouds');
    this.createClouds();
  }

  createClouds = () => {
    let cloudCount = 2;
    console.log('width: ', win.width);

    setInterval(() => {
      cloudCount++;
      console.log(cloudCount);
      switch (cloudCount % 3) {
        case 0:
          console.log('beginning third of screen');
          //Dont let the cloud be generated anywhere outside of the first third of the screen's x-axis
          let max = win.width / 3 - 60;
          //Make sure the entire cloud fits on the screen?
          let min = -60;
          //This is the value used to indicate where on the x axis the cloud will be rendered
          let xVal = Math.floor(Math.random() * (max - min + 1) + min);
          this.setState(prevState => ({
            cloudsArr: [
              ...prevState.cloudsArr,
              <Cloud xPosition={xVal} id={cloudCount} />,
            ],
          }));
          break;
        case 1:
          console.log('center third of screen');
          //Make sure the entire cloud fits on the screen?=
          max = win.width - 60;
          //Dont let the cloud be generated anywhere outside of the last third of the screen's x-axis
          min = (win.width * 2) / 3;
          //This is the value used to indicate where on the x axis the cloud will be rendered
          xVal = Math.floor(Math.random() * (max - min + 1) + min);
          this.setState(prevState => ({
            cloudsArr: [
              ...prevState.cloudsArr,
              <Cloud xPosition={xVal} id={cloudCount} />,
            ],
          }));
          break;

        case 2:
          //Dont let the cloud be generated anywhere outside of the second third of the screen's x-axis
          max = (win.width * 2) / 3;
          //Make sure the entire cloud fits on the screen?
          min = win.width / 3;
          //This is the value used to indicate where on the x axis the cloud will be rendered
          xVal = Math.floor(Math.random() * (max - min + 1) + min);
          this.setState(prevState => ({
            cloudsArr: [
              ...prevState.cloudsArr,
              <Cloud xPosition={xVal} id={cloudCount} />,
            ],
          }));
          break;
      }
      if (cloudCount > 20) {
        // remove first cloud in the array, it is no longer on the screen by now

        // this.setState({
        //   cloudsArr: this.state.cloudsArr.filter(1),
        // });
        console.log('cloud removed from the array... I think?');
      }
    }, 2000);

    //After 15 seconds, begin removing clouds from the front of the array
  };

  render() {
    //this.createClouds();
    return <Fragment>{this.state.cloudsArr.map(cloud => cloud)}</Fragment>;
  }
}
