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
    let numClouds = 3;

    //Pass a range for the position the new cloud should be rendered on the x-axis
    //Make sure no two clouds render ontop of/ intersecting each other
    let placeCloud = cloudCount => {
      console.log(cloudCount);

      //Should we break the screen into 2 sections or 3?
      switch (cloudCount % 3) {
        case 0:
          console.log('beginning third of screen');
          //Dont let the cloud be generated anywhere outside of the first third of the screen's x-axis
          let max = win.width / 2 - 120;
          //Make sure the entire cloud fits on the screen?
          let min = -10;
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
          max = win.width - 100;
          //Dont let the cloud be generated anywhere outside of the last third of the screen's x-axis
          min = win.width / 2;
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
    };
    placeCloud(numClouds);
    //Generate a new cloud every 2 seconds
    let animateClouds = setInterval(() => {
      numClouds++;
      placeCloud(numClouds);
      if (numClouds > 30) {
        stopAnimation();
        console.log('stop producing clouds');
      }
    }, 2000);

    function stopAnimation() {
      clearInterval(animateClouds);
    }
  };

  render() {
    //this.createClouds();
    return <Fragment>{this.state.cloudsArr.map(cloud => cloud)}</Fragment>;
  }
}
