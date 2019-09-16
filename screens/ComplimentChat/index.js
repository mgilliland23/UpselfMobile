import React from 'react';
import {Button} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import API from '../../utils/API';

import logo from '../../assets/images/check/check1.png';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Set initial state for when chat is first started
      messages: [
        {
          _id: 1,
          text: 'Everything would be better if more people were like you!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Upsy',
            avatar: logo,
          },
        },
      ],
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Upsy Love',

      headerStyle: {
        backgroundColor: '#6bccf3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  //Get a response from upsy using the upself web API
  getUpsyCompliment = () => {
    console.log(this.state.messages[0]);
    //Pass the user's message to the upself API and append Upsy's response to the chat
    API.getCompliment().then(
      function(response) {
        //Create message object containg the response from the API.
        //This is the object that the Gifted Chat component expects
        let upsyMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: response,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Upsy',
            avatar: logo,
          },
          // Any additional custom parameters are passed through
        };
        console.log(upsyMessage);
        //Append Upsy's message to the chat
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, upsyMessage),
        }));
        //Bind this to maintain proper scop for setState
      }.bind(this),
    );
  };

  //Handle when a user sends a new message
  onSend(messages = []) {
    // Append user's message to the chat
    this.setState(
      previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }),
      () => {
        //Get response from Upsy
        this.getUpsyCompliment();
      },
    );
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
