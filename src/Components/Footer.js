import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import '../App.css';

const iconStyles = {width: "2em", height: "2em", margin: ".5em"};

class Menu extends Component {
  render() {
    return (
      <div style={{paddingBottom: 20}}>
        <SocialIcon url="https://www.facebook.com/blindtigerfl" target="_blank" style={iconStyles}/>
        <SocialIcon url="https://www.instagram.com/blindtigerfl/" target="_blank" style={iconStyles}/>
        <SocialIcon url="https://www.youtube.com/channel/UC52mgaOR97hPqf6Jt9NpSsA" target="_blank" style={iconStyles}/>
        <SocialIcon url="https://open.spotify.com/artist/5GAcYozpFbL4ImPvwTH1Jn" target="_blank" style={iconStyles}/>
      </div>
    )
  }
}

export default Menu