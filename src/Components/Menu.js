import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { SocialIcon } from 'react-social-icons';
import '../App.css';
// import { Link } from 'react-router-dom';

const iconStyles = {width: "2em", height: "2em", margin: ".5em"};
const iconStylesEnd = {width: "2em", height: "2em", margin: ".5em", marginRight: "5em"};

class Menu extends Component {
  constructor() {
    super()
    this.state = {
      currentScrollHeight: ''
    }
  }

  componentDidMount () {      
    window.onscroll = () => {
     const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
     if (this.state.currentScrollHeight !== newScrollHeight){
         this.setState({currentScrollHeight: newScrollHeight})
     }
   }
 }

  render() { //        uncomment and comment out in app.css
    // const opacity = .7//Math.min(100 / this.state.currentScrollHeight  , 1);
    return (
      <div id='Menu'>
        <Navbar collapseOnSelect fixed="top" expand="sm" variant="dark">
          <Navbar.Brand href="#home"><img src="https://gdurl.com/HWaN" alt="" height="25em"/> Blind Tiger</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav justify style={{backgroundColor: "#2d2d3000"}} className="navbar">
              <Nav.Link href="#music">MUSIC</Nav.Link>
              <Nav.Link href="#vids">VIDS</Nav.Link>
              <Nav.Link className="navtext" href="#tour">TOUR</Nav.Link>
              <Nav.Link className="navtext" href="https://blindtigermerch.square.site/s/shop">MERCH</Nav.Link>
              <Nav.Link className="navtext" href="#chat">TIGER CHAT</Nav.Link>
              {/* <NavDropdown alignRight title="Inspiration" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Youtube Poop Playlist</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Musical Inspiration</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <SocialIcon url="https://www.facebook.com/blindtigerfl" target="_blank" style={iconStyles}/>
            <SocialIcon url="https://www.instagram.com/blindtigerfl/" target="_blank" style={iconStyles}/>
            <SocialIcon url="https://www.youtube.com/channel/UC52mgaOR97hPqf6Jt9NpSsA" target="_blank" style={iconStyles}/>
            <SocialIcon url="https://open.spotify.com/artist/5GAcYozpFbL4ImPvwTH1Jn" target="_blank" style={iconStylesEnd}/>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Menu