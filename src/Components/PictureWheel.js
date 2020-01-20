import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
class PictureWheel extends Component {
  
  render() {
    return (
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
    )
  }
}

export default PictureWheel;