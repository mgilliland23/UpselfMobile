import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import API from '../../utils/API';

import logo from '../../assets/images/upsy_emo/upsy1_emo3.png';

export default class Chat extends React.Component {
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
          createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
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
