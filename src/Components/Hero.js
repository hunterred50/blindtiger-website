import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import { Breakpoint } from 'react-socks';
import { SocialIcon } from 'react-social-icons';

const iconStyles = {width: "2em", height: "2em", margin: ".5em"};

class Hero extends Component {
  
  render() {
    return (
      <div className="backg" style={{lineHeight: 0}}>
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://gdurl.com/uv72"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Breakpoint large up>
          <img style={{position: "absolute", top: "13vw", left: "18vw", height: "27vw"}} alt="ep art" src="https://gdurl.com/InHK" />
          <h1 style={{position: "absolute", top: "18vw", left: "53vw", color: "#eaeaea", textAlign: "right"}}><div style={{fontSize: "4vw"}}>Blind Tiger</div><div style={{fontSize: "3.2vw"}}>self-titled EP <br/>OUT NOW</div></h1>
          <a style={{position: "absolute", top: "33vw", left: "61vw", color: "#eaeaea"}} target="_blank" rel="noopener noreferrer" href="https://blindtigerfl.bandcamp.com/album/blind-tiger"><button className="herobutt">listen here</button></a>
          <br/>
        </Breakpoint>
        <Breakpoint medium down>
          <img style={{position: "absolute", top: "20vw", left: "18vw", height: "27vw"}} alt="ep art" src="https://gdurl.com/InHK" />
          <h1 style={{position: "absolute", top: "25vw", left: "53vw", color: "#eaeaea", textAlign: "right"}}><div style={{fontSize: "4vw"}}>Blind Tiger</div><div style={{fontSize: "3.2vw"}}>self-titled EP <br/>OUT NOW</div></h1>
          <a style={{position: "absolute", top: "40vw", left: "60vw", color: "#eaeaea"}} target="_blank" rel="noopener noreferrer" href="https://blindtigerfl.bandcamp.com/album/blind-tiger"><button className="herobutt">listen here</button></a>
          <br/>

          <SocialIcon url="https://www.facebook.com/blindtigerfl" target="_blank" style={iconStyles}/>
          <SocialIcon url="https://www.instagram.com/blindtigerfl/" target="_blank" style={iconStyles}/>
          <SocialIcon url="https://www.youtube.com/channel/UC52mgaOR97hPqf6Jt9NpSsA" target="_blank" style={iconStyles}/>
          <SocialIcon url="https://open.spotify.com/artist/5GAcYozpFbL4ImPvwTH1Jn" target="_blank" style={iconStyles}/>
        </Breakpoint>
      </div>
    )
  }
}

export default Hero;