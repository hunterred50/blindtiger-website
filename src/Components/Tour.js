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
      <div style={{backgroundImage: 'url("https://gdurl.com/mvlO")', backgroundPosition: 'center'}}>
        <div style={{backgroundColor: 'black', opacity: 0.85, paddingTop: 100, paddingBottom: 70}}>
          <div className="container" id="tour">
            <h1>Tour</h1><p></p>
            <a href="https://www.songkick.com/artists/2215011-blind-tiger" class="songkick-widget" data-theme="light" data-track-button="on" data-detect-style="true" data-font-color="#ffffff" data-background-color="#3b3b3b" data-locale="en">Blind Tiger tour dates</a>
            <p></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Tour