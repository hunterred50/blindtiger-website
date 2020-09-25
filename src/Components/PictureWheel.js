import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import { Breakpoint } from 'react-socks';
import { SocialIcon } from 'react-social-icons';

const iconStyles = {width: "2em", height: "2em", margin: ".5em"};

class PictureWheel extends Component {
  
  render() {
    return (
      <div className="backg" style={{lineHeight: 0}}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://gdurl.com/ZUTLi"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://gdurl.com/LHRi"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://gdurl.com/L5uj"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <br/>
        <Breakpoint medium down>
          <SocialIcon url="https://www.facebook.com/blindtigerfl" target="_blank" style={iconStyles}/>
          <SocialIcon url="https://www.instagram.com/blindtigerfl/" target="_blank" style={iconStyles}/>
          <SocialIcon url="https://www.youtube.com/channel/UC52mgaOR97hPqf6Jt9NpSsA" target="_blank" style={iconStyles}/>
          <SocialIcon url="https://open.spotify.com/artist/5GAcYozpFbL4ImPvwTH1Jn" target="_blank" style={iconStyles}/>
        </Breakpoint>
      </div>
    )
  }
}

export default PictureWheel;