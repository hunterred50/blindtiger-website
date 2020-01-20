import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';

class Menu extends Component {
  render() {
    return (
      <Navbar collapseOnSelect fixed="top" expand="sm" variant="dark">
        <Navbar.Brand href="#home"><img src="https://gdurl.com/HWaN" alt="" height="25em"/>Blind Tiger</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav justify className="navbar" justify-content="end">
            <Nav.Link className="navtext" href="#music">MUSIC</Nav.Link>
            <Nav.Link className="navtext" href="#tour">TOUR</Nav.Link>
            <Nav.Link className="navtext" href="#merch">MERCH</Nav.Link>
            {/* <NavDropdown alignRight title="Inspiration" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Youtube Poop Playlist</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Musical Inspiration</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Menu