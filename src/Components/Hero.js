import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import { Breakpoint } from 'react-socks';
import { SocialIcon } from 'react-social-icons';
import heroBkdg from '../images/heroBkgd.png'
import hero from '../images/hero.png'

const iconStyles = {width: "2em", height: "2em", margin: ".5em"};

class Hero extends Component {
  
  render() {
    return (
      <div className="backg" style={{lineHeight: 0}}>
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={heroBkdg}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Breakpoint large up>
          <img style={{position: "absolute", top: "13vw", left: "18vw", height: "36vw"}} alt="tour art" src={hero} />
          <h1 style={{position: "absolute", top: "18vw", left: "53vw", color: "#eaeaea", textAlign: "right"}}><div style={{fontSize: "3.2vw"}}>Catch</div><div style={{fontSize: "4vw"}}>Blind Tiger</div><div style={{fontSize: "3.2vw"}}>on TOUR</div></h1>
          <a style={{position: "absolute", top: "33vw", left: "61vw", color: "#eaeaea"}} href="./#tour"><button className="herobutt">See Dates</button></a>
          <br/>
        </Breakpoint>
        <Breakpoint medium only>
          <img style={{position: "absolute", top: "10vw", left: "18vw", height: "40vw"}} alt="tour art" src={hero} />
          <h1 style={{position: "absolute", top: "20vw", left: "53vw", color: "#eaeaea", textAlign: "right"}}><div style={{fontSize: "3.2vw"}}>Catch</div><div style={{fontSize: "4vw"}}>Blind Tiger</div><div style={{fontSize: "3.2vw"}}>on TOUR</div></h1>
          <a style={{position: "absolute", top: "34vw", left: "60vw", color: "#eaeaea"}} href="./#tour"><button className="herobutt">See Dates</button></a>
          <br/>

          <SocialIcon url="https://www.facebook.com/blindtigerfl" target="_blank" style={iconStyles}/>
          <SocialIcon url="https://www.instagram.com/blindtigerfl/" target="_blank" style={iconStyles}/>
          <SocialIcon url="https://www.youtube.com/channel/UC52mgaOR97hPqf6Jt9NpSsA" target="_blank" style={iconStyles}/>
          <SocialIcon url="https://open.spotify.com/artist/5GAcYozpFbL4ImPvwTH1Jn" target="_blank" style={iconStyles}/>
        </Breakpoint>
        <Breakpoint small down>
          <img style={{position: "absolute", top: "20vw", left: "18vw", height: "40vw"}} alt="tour art" src={hero} />
          <h1 style={{position: "absolute", top: "25vw", left: "53vw", color: "#eaeaea", textAlign: "right"}}><div style={{fontSize: "3.2vw"}}>Catch</div><div style={{fontSize: "4vw"}}>Blind Tiger</div><div style={{fontSize: "3.2vw"}}>on TOUR</div></h1>
          <a style={{position: "absolute", top: "40vw", left: "60vw", color: "#eaeaea"}} href="./#tour"><button className="herobutt">See Dates</button></a>
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