import React from 'react';
import {Button} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import API from '../../utils/API';

import logo from '../../assets/images/check/check1.png';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    messages: [],
  };

  //Set initial state for when chat is first started
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello! I'm Upsy. How are you doing today?",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Upsy',
            avatar: logo,
          },
        },
      ],
    });
  }

  //Get a response from upsy using the upself web API
  getUpsyResponse = () => {
    console.log(this.state.messages[0]);
    //Pass the user's message to the upself API and append Upsy's response to the chat
    API.getMessageJaro(this.state.messages[0].text).then(
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
        this.getUpsyResponse();
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
