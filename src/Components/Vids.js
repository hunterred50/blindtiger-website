import React, { Component } from 'react';

class Vids extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="container" id="vids">
        <h1>Vids</h1>
        <p style={{paddingTop:'20px'}}></p>
        <iframe title="inTheFuture" width="100%" height="315" src="https://www.youtube.com/embed/XLlM3NzrcKU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        <p style={{paddingTop:'20px'}}></p>
        <iframe title="littleRoom2018" width="100%" height="315" src="https://www.youtube.com/embed/MkTeVukUPdw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        <p style={{paddingTop:'20px'}}></p>
        <iframe title="whatIsThis" width="100%" height="315" src="https://www.youtube.com/embed/_bOE20PcIfI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        <p style={{paddingTop:'20px'}}></p>
        <iframe title="littleRoom2015" width="100%" height="315" src="https://www.youtube.com/embed/m1k8TS0Nsjo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

      </div>
    )
  }
}

export default Vids


// I like to eat cheese. Sometimes I like to eat cheese.