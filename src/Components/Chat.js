import React, { Component } from 'react';
import './Chat/Chat.css';
import Messages from "./Chat/Messages";
import Input from "./Chat/Input";
// https://www.scaledrone.com/blog/tutorial-build-a-reactjs-chat-app/

function randomName() {
  const adjectives = [
    "blonde", "blatant", "blackened", "blasted", "blamable", "bleached",
    "blind", "blended", "blithe", "blissful", "blunt", "blushing", "bluecoat", 
    "blue", "poopoo"
  ];
  const nouns = [
    "tiger", "toner", "toiger", "toffee", "tibber", "peepee"
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + " " + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class Chat extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    }
  }

  constructor() {
    super();
    this.drone = new window.Scaledrone("RpqLck5lcwnHslgz", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
  }

  render() {
    return (
      <div className="Chat" id="chat">
        <div className="Chat-header">
          <h1><img src="https://gdurl.com/HWaN" alt="" height="30em"/> Tiger Chat <img src="https://gdurl.com/HWaN" alt="" height="30em"/></h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

}

export default Chat;