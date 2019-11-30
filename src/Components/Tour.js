import React, { Component } from 'react';

class Tour extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "//widget.songkick.com/2215011/widget.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="container">
        <h1>Tour</h1><p></p>
        <a href="https://www.songkick.com/artists/2215011-blind-tiger" class="songkick-widget" data-theme="light" data-track-button="on" data-detect-style="true" data-font-color="#ffffff" data-background-color="#3b3b3b" data-locale="en">Blind Tiger tour dates</a>
        <p></p>
      </div>
    )
  }
}

export default Tour