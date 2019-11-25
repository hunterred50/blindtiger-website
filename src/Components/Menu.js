import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';

class Menu extends Component {
  render() {
    return (
      <Navbar collapseOnSelect fixed="top" expand="sm" variant="dark">
        <Navbar.Brand href="#home">Blind Tiger</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link className="navtext" href="#music">MUSIC</Nav.Link>
            <Nav.Link className="navtext" href="#tour">TOUR</Nav.Link>
            <NavDropdown alignRight title="Inspiration" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Youtube Poop Playlist</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Musical Inspiration</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Menu